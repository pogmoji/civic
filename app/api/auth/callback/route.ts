import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/citizen";

  const supabase = await createSupabaseServerClient();
  let user = null;

  if (code) {
    const { data: { user: authUser } } = await supabase.auth.exchangeCodeForSession(code);
    user = authUser;
  } else {
    // If no code, check if there is already an active session using getUser for security
    const { data: { user: authUser } } = await supabase.auth.getUser();
    user = authUser;
  }

  if (user) {
    try {
      await prisma.user.upsert({
        where: { id: user.id },
        create: { id: user.id, email: user.email!, role: "CITIZEN" },
        update: { email: user.email! },
      });
    } catch (error: any) {
      if (error.code === "P2002") {
        // Unique constraint failed on email. This usually happens in testing if a user is 
        // deleted from Supabase Auth but not from the Prisma database. 
        // We will link the existing database user to the new Supabase Auth ID.
        try {
          await prisma.user.update({
            where: { email: user.email! },
            data: { id: user.id },
          });
        } catch (updateError) {
          console.error("Failed to update existing user ID:", updateError);
        }
      } else {
        console.error("Prisma sync error:", error);
      }
    }
  }

  return NextResponse.redirect(`${origin}${next}`);
}

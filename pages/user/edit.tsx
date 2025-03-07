import { UserForm } from "@/components/forms/";
import Header from "@/components/navbar/";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { useRestrictedSession } from "@/hooks/session/useRestrictedSession";
import { useUser } from "@/hooks/user-hooks/useUser";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const session = useRestrictedSession();

  const { user } = useUser(id, session);
  return (
    <>
      <Head>
        <title>Modificando un utente</title>
      </Head>
      <main className={inter.className}>
        <Header session={session} />
        <div className="min-h-screen flex items-center justify-center">
          <Container>
            <section className="bg-white dark:bg-gray-900 border border-gray-200 rounded-lg shadow dark:border-gray-700">
              <div className="py-8 px-10 mx-auto">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                  Aggiorna un utente
                </h2>

                {user ? <UserForm initialUserData={user} /> : <Skeleton />}
              </div>
            </section>
          </Container>
        </div>
      </main>
    </>
  );
}

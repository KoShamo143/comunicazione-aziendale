import Link from "next/link";

export const CategoryManager = () => {
  return (
    <>
      <article className="p-6 rounded-lg group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-info-100 text-info-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-info-200 dark:text-info-800">
            <svg
              className="w-6 h-6 mr-1 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm5 2a1 1 0 0 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4 3a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4 3a1 1 0 1 0 0 2 1 1 0 1 0 0-2Zm4 0a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z"
                clipRule="evenodd"
              />
            </svg>
            HR
          </span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white transition group-hover:text-secondary">
          <Link href="/category" className="group-hover:text-secondary">
            Gestione Categorie
          </Link>
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          In questa sezione potrai creare, modificare, eliminare categorie,
          uttili per annunci personalizzati e per la mailing list.
        </p>
        <Link
          href="/category"
          className="flex items-center justify-between group-hover:text-secondary"
        >
          <span className="text-sm">Vai!</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </article>
    </>
  );
};

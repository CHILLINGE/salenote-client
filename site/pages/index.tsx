import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { SearchLayout } from "../components/layout/SearchLayout";
import { Search } from "../components/search/Search";

export default function Home() {
  const searchQuery = useSearchQuery();

  return (
    <SearchLayout>
      <Search initialSearch={searchQuery.value ?? undefined} onSearchChange={(val) => searchQuery.update(val)} />
    </SearchLayout>
  );
}

function useSearchQuery() {
  const router = useRouter();
  const [value, setValue] = useState<null | string>(null);

  useEffect(() => {
    const val = router.query.search;
    if (typeof val === "string") {
      setValue(val);
    } else {
      setValue(null);
    }
  }, [router, router.query]);

  function update(value: string) {
    router.push(`/?search=${value}`, undefined, {
      shallow: true,
    });
  }

  return {
    value,
    update,
  };
}

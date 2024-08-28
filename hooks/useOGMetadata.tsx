import { useState, useEffect } from "react";

interface OGMetadata {
  ogImage: string | null;
  title: string;
  description: string;
}

export default function useOGMetadata(url: string) {
  const [ogMetadata, setOgMetadata] = useState<OGMetadata | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchOGMetadata = async () => {
      try {
        const response = await fetch(
          `/api/og-metadata?url=${encodeURIComponent(url)}`,
        );
        const data = await response.json();
        if (isMounted && data.ogImage) {
          setOgMetadata(data);
        }
      } catch (error) {
        console.error("Error fetching OG metadata:", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchOGMetadata();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { ogMetadata, isLoading };
}

import { useParams } from "@remix-run/react";

export default function Vacation() {
  const params = useParams();
  return (
    <article>
      <h2>Accessing {params.id} woo!</h2>
    </article>
  );
}

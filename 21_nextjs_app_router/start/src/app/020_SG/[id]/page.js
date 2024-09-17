import { ENDPOINT } from "@/constants";

export default function Page({ params }) {
  const date = new Date;
  return <h3>このページは{params.id}です。{date.toJSON()}</h3>;
}


export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return data.map((record) => ( {id: record.id} ));
}
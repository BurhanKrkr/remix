import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPhones } from "~/service/app.service";
import PhoneList from "../phones/phone.list";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  return json(await getPhones());
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return <PhoneList Phones={data} />;
}

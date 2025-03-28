import { userColumns } from "@/components/dataTable/analytic/UserColumns";
import { DataTable } from "@/components/dataTable/DataTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Board",
  description: "Sherwynd Portfolio App",
};

export default async function Admin() {
  type User = {
    id: string;
    name: string;
    email: string;
    role: string;
  };

  const userData: User[] = [
    { id: "1", name: "Ali", email: "ali@gmail.com", role: "user" },
  ];

  return (
    <>
      <h1 className="pb-4 font-medium">Admin Board</h1>

      <main className="grid grid-cols-12 gap-4">
        <div className="col-span-12 rounded-xl bg-white">
          <DataTable
            columns={userColumns}
            data={userData}
            rowSelected={false}
            isFilterColumns={false}
          />
        </div>
      </main>
    </>
  );
}

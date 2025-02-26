import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TableColumnSection = ({ blok, settings }: any) => {
  return (
    <div
      className={`grid gap-14 container-section grid-cols-1 lg:grid-cols-2 py-10 lg:py-14`}
    >
      {blok.field.map((item: any) => (
        <Table key={item._uid} settings={settings}>
          <TableHeader>
            <TableRow className="table-head">
              {item.header.map((item: any, index: number) => {
                return (
                  <TableHead key={index} className="font-bold">
                    {item.title}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {item.body.map((item: any) => (
              <TableRow key={item._uid}>
                {item.field.map((fieldItem: any, index: number) => {
                  return <TableCell key={index}>{fieldItem.title}</TableCell>;
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ))}
    </div>
  );
};

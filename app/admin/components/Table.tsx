import { JSX } from "react";

interface TableProps<T> {
  data: T[];
  columns: { key: keyof T; label: string }[];
  actions?: (item: T) => JSX.Element;
}

export default function Table<T>({ data, columns, actions }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key.toString()} className="px-4 py-2 border">
                {col.label}
              </th>
            ))}
            {actions && <th className="px-4 py-2 border">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key.toString()} className="px-4 py-2 border">
                  {String(item[col.key])}
                </td>
              ))}
              {actions && <td className="px-4 py-2 border">{actions(item)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
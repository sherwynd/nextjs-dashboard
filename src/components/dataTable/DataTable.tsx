"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./demo/DataTablePagination";
import { DataTableViewOptions } from "./demo/DataTableViewOptions";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isFilterColumns?: boolean;
  filterColumnKey?: string;
  isToggleColumns?: boolean;
  rowSelected?: boolean;
  rowPerPage?: boolean;
  enableColumnFilter?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isFilterColumns = true,
  filterColumnKey = "name",
  isToggleColumns = true,
  rowSelected = true,
  rowPerPage = true,
  enableColumnFilter = true,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="p-4">
      {/* Filter and Columns Toggle */}
      <div className="filter-and-columns-toggle-part flex items-center py-4">
        {isFilterColumns && (
          <Input
            placeholder={`Filter ${filterColumnKey}`}
            value={
              (table
                .getColumn(`${filterColumnKey}`)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(`${filterColumnKey}`)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        )}
        {isToggleColumns && <DataTableViewOptions table={table} />}
      </div>

      {/* Data Table Section */}
      <div className="data-table-part rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const column = header.column;
                  return (
                    <TableHead key={header.id}>
                      {!header.isPlaceholder && (
                        <div className="flex flex-col items-start gap-1 py-2">
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                          {column.getCanFilter() && enableColumnFilter && (
                            <Input
                              value={(column.getFilterValue() ?? "") as string}
                              onChange={(event) =>
                                column.setFilterValue(event.target.value)
                              }
                              className="h-8"
                            />
                          )}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Set */}
      <div className="pagination-part flex items-center justify-end space-x-2 py-4">
        <DataTablePagination
          table={table}
          rowSelected={rowSelected}
          rowPerPage={rowPerPage}
        />
      </div>
    </div>
  );
}

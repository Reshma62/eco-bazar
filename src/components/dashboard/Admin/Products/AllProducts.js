"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Pagination,
} from "@nextui-org/react";

import { TbEditCircle } from "react-icons/tb";
import { AiOutlineEye } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
const AllProducts = () => {
  return (
    <div className="flex flex-col gap-3">
      <Table
        color={"primary"}
        disallowEmptySelection
        selectionMode="multiple"
        // defaultSelectedKeys={["2", "3"]}
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn className="text-right pr-7">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>Tony Reichert</TableCell>
            <TableCell>CEO</TableCell>
            <TableCell>Active</TableCell>
            <TableCell className="text-right">
              <div className="relative flex items-center justify-end gap-3">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <AiOutlineEye />
                  </span>
                </Tooltip>
                <Tooltip content="Edit product">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <TbEditCircle />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <MdAutoDelete />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>Zoey Lang</TableCell>
            <TableCell>Technical Lead</TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>
              <div className="relative flex justify-end items-center gap-3">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <AiOutlineEye />
                  </span>
                </Tooltip>
                <Tooltip content="Edit product">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <TbEditCircle />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <MdAutoDelete />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>Jane Fisher</TableCell>
            <TableCell>Senior Developer</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <div className="relative flex justify-end items-center gap-3">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <AiOutlineEye />
                  </span>
                </Tooltip>
                <Tooltip content="Edit product">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <TbEditCircle />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete user">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <MdAutoDelete />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>William Howard</TableCell>
            <TableCell>Community Manager</TableCell>
            <TableCell>Vacation</TableCell>
            <TableCell>
              <div className="relative flex justify-end items-center gap-3">
                <Tooltip content="Details">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <AiOutlineEye />
                  </span>
                </Tooltip>
                <Tooltip content="Edit product">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <TbEditCircle />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <MdAutoDelete />
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination isCompact showControls total={20} initialPage={1} />
    </div>
  );
};

export default AllProducts;

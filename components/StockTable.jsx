"use client";
import React, { useState } from "react";

let renderTableRow = ({ data, deleteHandler }) => {
  return (
    <>
      {data.map((item) => (
        <tr
          key={item._id}
          className="w-full md:w-[800px] text-black bg-white border-2 border-blue-600"
        >
          <th
            scope="row"
            className="px-1 md:px-6 py-2 font-medium text-black bg-white whitespace-nowrap"
          >
            {item.companyName}
          </th>
          <td className="px-1 md:px-6 py-2">{item.symbol}</td>
          <td className="px-1 md:px-6 py-2">{item.quantity}</td>
          <td className="px-1 md:px-6 py-2">{item.purchasePrice}</td>
          <td className="px-1 md:px-6 py-2">{"Market Price"}</td>
          <td>
            <button
              onClick={() => {
                deleteHandler(item);
              }}
              className="  bg-blue-500 opacity-90 text-white rounded m-1 md:m-2 px-1 md:px-6 py-1 md:py-2 font-semibold"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

const Table = ({ data, deleteHandler, names }) => {
  return (
    <table className="w-full md:w-[800px]  text-sm md:text-base text-left text-white rtl:text-right bg-blue-400 border-2 border-blue-600">
      <thead className="text-xs md:text-sm text-white uppercase bg-blue-400 ">
        <tr>
          <th scope="col" className="px-1 md:px-6 py-2">
            {names.first}
          </th>
          <th scope="col" className="px-1 md:px-6 py-2">
            {names.second}
          </th>
          <th scope="col" className="px-1 md:px-6 py-2">
            {names.third}
          </th>
          <th scope="col" className="px-1 md:px-6 py-2">
            {names.fourth}
          </th>
          <th scope="col" className="px-1 md:px-6 py-2">
            {names.fifth}
          </th>
          <th scope="col" className="px-1 md:px-6 py-2"></th>
        </tr>
      </thead>
      <tbody className="bg-slate-200">
        {renderTableRow({ data, deleteHandler })}
      </tbody>
      <tfoot>
        <tr className="text-white uppercase bg-blue-400">
          <th scope="row" className="px-1 md:px-6 py-2">
            Total
          </th>
          <td className="px-1 md:px-6 py-2"></td>
          <td className="px-1 md:px-6 py-2">{
          JSON.stringify(data.reduce(function (x, y) {
                return x + y.quantity;
              }, 0))}</td>
          <td className="px-1 md:px-6 py-2">{JSON.stringify(data.reduce(function (x, y) {
                return x + y.purchasePrice * y.quantity;
              }, 0))
          }</td>
          <th scope="col" className="px-1 md:px-8  py-2"></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;

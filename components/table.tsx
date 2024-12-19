const Table = ({ headers, rows }: { headers: string[]; rows: string[][] }) => {
  return (
    <div className="w-full overflow-x-auto mb-4">
      <table className="w-full border-collapse bg-white/50 rounded-lg overflow-hidden">
        <thead className="bg-accent">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-semibold border-b"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm whitespace-normal"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

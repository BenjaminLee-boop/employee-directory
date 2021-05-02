export default function UserTable({ data }) {
  return (
    <div>
      <table className="table sortable" id="sortTable">
        <thead className="tableHeader">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr key={e.email}>
              <td>{e.name.first}</td>
              <td>{e.name.last}</td>
              <td>{e.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

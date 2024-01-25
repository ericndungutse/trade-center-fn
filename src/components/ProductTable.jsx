function ProductTable() {
  return (
    <div className='container mx-auto mt-8'>
      <table className='min-w-full bg-white border border-gray-300'>
        <thead>
          <tr>
            <th className='py-2 px-4 border-b'>Header 1</th>
            <th className='py-2 px-4 border-b'>Header 2</th>
            <th className='py-2 px-4 border-b'>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='py-2 px-4 border-b'>Row 1, Cell 1</td>
            <td className='py-2 px-4 border-b'>Row 1, Cell 2</td>
            <td className='py-2 px-4 border-b'>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td className='py-2 px-4 border-b'>Row 2, Cell 1</td>
            <td className='py-2 px-4 border-b'>Row 2, Cell 2</td>
            <td className='py-2 px-4 border-b'>Row 2, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

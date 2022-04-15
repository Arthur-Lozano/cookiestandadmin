import { hours, hourly_sales } from '../data'


export default function Table(props) {
  return (
    <table className="w-3/4 m-8 bg-green-500 tableRow" id="myTable">
      <thead>
        <tr className="odd:bg-green-500">
          <th>Location</th>
          {hours.map(item => {
            return (<th id=''>{item}</th>
            )
          })}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => {
          console.log('this is the data  from props, located on main component', props.data)
          return (
            <tr className="border border-gray-700 odd:bg-green-400 even:bg-green-300">
              <td className="p-1 font-bold text-center capitalize border border-gray-700">{item.location}</td>
              {hourly_sales.map(item => {
                return (<td className="text-center border border-gray-700">{item}</td>)
              })}
            </tr>)
        })}

      </tbody>
      <tfoot>
        <tr className="font-bold text-center bg-green-500 border border-gray-700">Totals</tr>
      </tfoot>
    </table>
  )
}
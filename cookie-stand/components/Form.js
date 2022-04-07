export default function Form(props) {
  return (
    <form className="items-center w-3/4 p-6 mx-auto my-5 bg-yellow-300 rounded-md ">
      <div className="flex align-content-center">
        <h1 className="text-2xl font-bold">Create Cookie Stand</h1>
      </div>
      <div className="flex items-center text-center">
        <label>Location</label>
        <input type='text' className="flex-auto w-5/6 m-4" />
      </div>
      <div className="flex w-full justify-items-center h-1/2">
        <ul className="w-1/3 h-full p-2 text-sm text-center bg-green-200 n-3">
          <li><label className="font-bold">Minimum customer per hour</label></li>
          <li><input className="w-full" type="number" placeholder="2" /></li>
        </ul>
        <ul className="w-1/3 h-full p-2 text-sm text-center bg-green-200 n-3">
          <li><label className="font-bold">Maximum customers per hour</label></li>
          <li><input className="w-full" type="number" placeholder="4" /></li>
        </ul>
        <ul className="w-1/3 h-full p-2 text-sm text-center bg-green-200 n-3">
          <li><label className="font-bold">Average Cookies per Sale</label></li>
          <li><input className="w-full" type="number" placeholder="2.5" /></li>
        </ul>
        <button className="flex-auto w-1/4 font-bold bg-yellow-500 border-yellow-500 n-3 text-xm hover:border-black">
          Create
        </button>
      </div>

    </form>
  )
}
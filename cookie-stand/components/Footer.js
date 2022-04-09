export default function Footer({ count }) {
    return (
        <footer className="flex w-full p-4 mt-8 text-center bg-green-500">
            <h2 className="ml-2 font-mono text-3xl drop-shadow-lg">{count} Locations World wide</h2>
        </footer>
    )
}
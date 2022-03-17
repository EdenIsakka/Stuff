export function Alert({message}){
    return <div className="bg-blue-100 border border-primary
    text-primary px-6 py-4 relative mb-2 text-center">
        <span className="sm:inline block">{message}</span>
    </div>
}
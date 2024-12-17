export function StepThree({setSteps}) {
    return (
        <div className="text-2xl">hello
         <button 
            className="text-black flex gap-16"
            onClick={() => {
            setSteps(2)}} >back
            </button>
</div>
    )
}
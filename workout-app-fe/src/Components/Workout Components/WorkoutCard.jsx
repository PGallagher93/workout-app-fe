const WorkoutCard = (title)=>{
return (
    <div className="bg-orange-400 min-h-20 w-25vw p-1 rounded m-12">
    <span>{title.title}</span>
    <button >add</button>
    </div>
)
}

export default WorkoutCard
const { Engine, Render, Runner, World, Bodies } = Matter ;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element : document.body,
    engine : engine,
    options : {
        width : 800,
        height : 600
    }
})
Render.run(render); //Manages the visual part of the simulation (displaying objects and their current positions on the canvas).
Runner.run(Runner.create(),engine); // Manages the simulation logic (updating the physics engine with new positions, velocities, and collision states).

// Walls
const walls = [
    Bodies.rectangle(400,0,800,40, {isStatic : true}),
    Bodies.rectangle(400,600,800,40, {isStatic : true}),
    Bodies.rectangle(0,300,40,600, {isStatic : true}),
    Bodies.rectangle(800,300,40,600, {isStatic : true})
]
World.add(world,walls);
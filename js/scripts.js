const userName = prompt("What is your name?");
const color = prompt(`${userName}, What is your favorite color? Please pick from the following... red, orange, yellow, green, blue, pink, purple, black, white, and grey`);

switch (color) {

    case "red" :
        alert(`${userName}, your color is red... 
        Grass gives underfoot
        Dark spots on a red brick wall
        Under gutter joints
        -CALVIN OLSEN`);
        break;
    case "orange" :
        alert(`${userName}, your color is orange... 
        Orange Cheeto glows
        Bright against the thin black ash
        Under a range coil
        -CALVIN OLSEN`);
        break;
    case "yellow" :
        alert(`${userName}, your color is yellow... 
        Yellow caution tape
        Closes off the brick car wash
        Strong chemical smell
        -CALVIN OLSEN`);
        break;
    case "green" :
        alert(`${userName}, your color is green... 
        Against the window:
        Green grasshopper’s spiracles
        Expand and contract
        -CALVIN OLSEN`);
        break;
    case "blue" :
        alert(`${userName}, your color is blue... 
        Blue backdrop, no smile
        Paper license replica
        Organ donor heart
        -CALVIN OLSEN`);
        break;
    case "pink" :
        alert(`${userName}, your color is pink... 
        Smokestack shadow splits
        A mass of factory steam
        Tinged pink by sunrise
        -CALVIN OLSEN`);
        break;
    case "purple" :
        alert(`${userName}, your color is purple... 
        Soft light of near dusk
        Brick building tinted purple
        When viewed through trees
        -CALVIN OLSEN`);
        break;
    case "black" :
        alert(`${userName}, your color is black... 
        Thin black graffiti
        Tag says This Future Sucks. I
        Disagree out loud
        -CALVIN OLSEN`);
        break;
    case "white" :
        alert(`${userName}, your color is white... 
        White flagstone walkway
        Interrupted by dark rocks
        Thrown by my baby
        -CALVIN OLSEN`);
        break;
    case "grey" :
        alert(`${userName}, your color is grey... 
        Grey cloudy sky, no sun
        wet water falls
        fun to stomp
        -Brad Williams`);
        break;
    default:
        alert("I dont know that color");
        break;

}
/**
 * Created by shituocheng on 2016/9/17.
 */
function moveElement(elementId, final_x, final_y, interval) {
    if (!document.getElementById) return false;
    var elem = document.getElementById(elementId);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) return true;
    if (elem.movement){
        clearTimeout(elem.movement);
    }
    if (xpos < final_x){
        var dist = Math.ceil((final_x - xpos)/10);
        xpos = xpos + dist;
    }
    if (xpos > final_x){
        var dist = Math.ceil((xpos - final_x)/10);
        xpos = xpos - dist;
    }
    if (ypos < final_y){
        var dist = Math.ceil((final_y - ypos)/10);
        ypos = ypos + dist;
    }
    if (ypos > final_y){
        var dist = Math.ceil((ypos - final_y)/10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos +"px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementId+"', "+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat, interval);
}
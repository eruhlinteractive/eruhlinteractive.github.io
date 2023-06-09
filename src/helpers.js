// A class that describes a Vector2 and related operations
class Vector2
{
    constructor(x=0,y=0)
    {
        this.x = x;
        this.y = y;
    }

    static subtract(a,b)
    {
        return new Vector2(b.x-a.x,b.y-a.y);
    }

    static add(a,b)
    {
        return new Vector2(b.x+a.x,b.y+a.y);
    }


    static clamp(vec,min,max)
    {
        let x = Math.min(vec.x,max.x).max(vec.x,min.x);
        let y = Math.min(vec.y,max.y).max(vec.y,min.y);
        return new Vector2(x,y);
    }

    static lerp(from,to,delta = 0)
    {
        if(from === null ||to === null)
        {
            return;
        }

        let x,y;
        x = from.x + delta * (to.x - from.x);
            
        y = from.y + delta * (to.y - from.y);
        return new Vector2(x,y);
    }

    static multiplyScalar(vec,scalar)
    {
        return new Vector2(vec.x * scalar,vec.y * scalar);
    }

    static dot(a,b)
    {
        return (a.x * b.x) + (a.y * b.y);
    }

    normalized()
    {
        let mag = new Vector2(this.x,this.y).magnitude();
        if(mag === 0)
        {
            return new Vector2();
        }
        return new Vector2(this.x / mag,this.y/mag);
    }


    squareMagnitude()
    {
       return (Math.pow(this.x,2.0) * Math.pow(this.y,2.0));
    }

    magnitude()
    {
        return (Math.sqrt(Math.pow(this.x,2.0) + Math.pow(this.y,2.0)));
    }

    static isEqual(a,b)
    {
        if(a.x === b.x && a.y===b.y)
        {
            return true;    
        }
        return false;
    }

}

function floatClamp(num,min,max) {return Math.max(Math.min(num,max),num);}
function floatLerp(start,end,delta) { return start + delta * (end - start);}

export {Vector2,floatClamp,floatLerp};
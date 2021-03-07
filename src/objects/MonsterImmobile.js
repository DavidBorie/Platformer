class Monsterimmobile extends ObjetEnnemi{
    /**
     *
     * @param {Tableau} scene
     * @param x
     * @param y
     */
    constructor(scene, x, y) {
        super(scene, x, y, "MonsterImmobile");
        //pas de gravité
        this.body.allowGravity=false;
 
 // X
        this.originalX=x;
        this.minX=x-150;
        this.maxX=x+150;

        // Y
        this.originalY=y;
        this.minY=y-20;
        this.maxY=height;

        // on applique les propriété du début de l'animation
        this.x=this.minX;
        this.y=this.minY;
        this.alpha=0;
        let me=this;

    }
 }

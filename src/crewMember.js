class CrewMember {
  constructor(position){
    this.position=position
    this.currentShip= "Looking for a Rig"
  }

  engageWarpDrive(){

    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
   }
   if (this.postion=== "Defender") {
     return "disengaged"
   }
  if (this.postion==="Pilot") {
    return "engaged"
  }
 }


  setsInvisibility(){
    if( this.currentShip === 'Looking for a Rig' ){
      return "had no effect"
    }else if( this.position === "Defender"){
      this.currentShip.cloaked = true
    }
  }

  chargePhasers(){
    if (this.currentShip === "Looking for a Rig"){
      return "had no effect"
  }
    else if (this.postion==="Gunner") {
      this.currentShip.phasersCharge="charged"
    }
  }
}

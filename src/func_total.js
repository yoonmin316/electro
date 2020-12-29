var elect_charge = {
    price_house:[910, 1600, 7300, 93.3, 187.9, 280.6],
    price_apart:[730, 1260, 6060, 78.3, 147.3, 215.6],
    myhome: this.price_apart,
    home: null,
    before_vat: null,
    final_charge: null,
    set_property:function(){
     this.home = document.querySelector('input[name="home"]:checked').value;
     if(this.home == 'house'){
         this.myhome = this.price_house;
     }else if(this.home == 'apart'){
        this.myhome = this.price_apart;
     }
    },
    get_before_vat:function(){
        var in_kwh = document.getElementById('in_kwh').value;
        var imans;
        if(in_kwh <= 200){
          imans = this.myhome[0] + (in_kwh*this.myhome[3]);
        }else if(in_kwh > 200&&in_kwh <= 400){
          imans = this.myhome[1] + (200*this.myhome[3]) + ((in_kwh-200)*this.myhome[4]);
        }else if(in_kwh > 400){
          imans = this.myhome[2] + (200*this.myhome[3]) + (200*this.myhome[4]) + ((in_kwh-400)*this.myhome[5]);
        }
        /*var num = imans * 0.1;
        num = Math.floor(num);
        num = num *10;
        this.before_vat = num;*/
        this.before_vat = Math.floor(imans);
    },
    get_for_industry:function(n){
      var num = n * 0.1;
      num = Math.floor(num);
      num = num *10;
      return num;
    },
    get_vat:function(){
      var re = (1.1)*this.before_vat + this.get_for_industry(0.037*this.before_vat);
      //내림처리
      this.final_charge = this.get_for_industry(re);
    },
    main:function(){
        this.set_property();
        this.get_before_vat();
        this.get_vat();
        document.querySelector('#result').innerHTML = "총 " + this.final_charge + "원";
    }
}
function hide(){
  document.querySelector('#poll').style.zIndex = -1;
  document.querySelector('#poll').style.display = 'none';
}
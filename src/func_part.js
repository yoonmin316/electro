var elect_charge = {
    price_house:[93.3, 187.9, 280.6],
    price_apart:[78.3, 147.3, 215.6],
    myhome: this.price_apart,
    id_price: 0,
    home: null,
    total_period: 1,
    kWh: 1,
    final_charge: null,
    set_property:function(){
        this.home = document.querySelector('input[name="home"]:checked').value
        var amount = document.querySelector('input[name="amount"]:checked').value;
        if(this.home == 'house'){
            this.myhome = this.price_house;
            if(amount == 'less'){
                this.id_price = 0;
            }else if(amount == 'middle'){
                this.id_price = 1;
            }else if(amount == 'over'){
                this.id_price = 2;
            }
        }else if(this.home == 'apart'){
           this.myhome = this.price_apart;
            if(amount == 'less'){
                this.id_price = 0;
            }else if(amount == 'middle'){
                this.id_price = 1;
            }else if(amount == 'over'){
                this.id_price = 2;
            } 
        }
    
    },
    get_total_period:function(){
        var date_type = document.getElementById('set_period').value;
        var per_hour = document.getElementById('hour').value;
        var user_period = document.getElementById('period').value;
        var idate = 1;
        if(!user_period){
            user_period = 1;
        }
        switch(date_type){
            case 'y':
            idate = idate*user_period*365;
            break;
            case 'm':
            idate = idate*user_period*30;
            break;
            case 'd':
            idate = idate*user_period*1;
        }
        this.total_period = idate*per_hour;
    },
    get_kWh:function(){
      var user_watt = document.getElementById('watt').value;
      this.kWh = (user_watt * this.total_period)/1000;
    },
    get_per_price:function(){
      this.final_charge = (this.myhome[this.id_price])*(this.kWh);
    },
    main:function(){
        this.set_property();
        this.get_total_period();
        this.get_kWh();
        this.get_per_price();
        var final_result = Math.floor(this.final_charge);
        document.querySelector('#result').innerHTML = final_result + "원";
    }
 }
 function hide(){
     document.querySelector('#poll').style.zIndex = -1;
     document.querySelector('#poll').style.display = 'none';
 }

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {
          name: "Lily's Cocina",
          lat: "39.715371",
          long: "-105.011143 ",
          address: "95 S Tejon St, Denver, CO 80223",
          food_type: "Mexican" ,
          rating: 5,
          hours: "6AM–2PM",
          phone: "(720) 352-9360",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media1.fl.yelpcdn.com%2Fbphoto%2FD95yx2y4FoR-1cmjGiI6zw%2Fo.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media4.fl.yelpcdn.com%2Fbphoto%2FbWY_CpkUnucrMBoWsUYSpw%2Fls.jpg&f=1&nofb=1",
          website: "https://m.facebook.com/pages/Lilys-Cocina/318875828459620"
        },
        {
          name: "Quiero Arepas",
          lat: "39.683000",
          long: "-104.980702",
          address: "1859 S Pearl St, Denver, CO 80210",
          food_type: "Venezuelan",
          rating: 5,
          hours: "11:00AM – 2:00PM, 5:00PM – 7:00PM",
          phone: "(720) 432-4205",
          truck: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.denverstreetfood.com%2Fwp-content%2Fuploads%2F2013%2F05%2F414774_224069774349843_1504999527_o.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZZIjKu5e0gJkO1_w34zcKgHaHb%26pid%3DApi&f=1",
          website: "https://quieroarepas.com/"
        },
        {
          name: "The Ginger Pig",
          lat: "39.729548",
          long: "-104.998450",
          address: "826 Santa Fe Dr, Denver, CO 80204",
          food_type: "Asian",
          rating: 5,
          hours: "11:00AM – 7:00PM",
          phone: "(720) 990-4552",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.5280.com%2F2017%2F12%2Fthe-ginger-pig-truck_Clytie-Sadler.jpg&f=1&nofb=1",
          food: "https://images.squarespace-cdn.com/content/v1/5925dfdc3a0411489c864ffc/1586483069854-ZVBXJLCBWDZRZKOYR9RZ/ke17ZwdGBToddI8pDm48kICZhzhlpkTfZgBvAXFSxyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw5opcnmBGTrSvl2qRMpP26yA6cXWreZBPZk6SUOsPorfERqjnAqscnEdqlY2BJvs0/image-asset.jpeg?format=300w",
          website: "https://www.thegingerpigtruck.com/"
        },
        {
          name: "Areyto Puerto Rican Food",
          lat: "39.751837",
          long: "-104.977781",
          address: "700 E 24th Ave #4, Denver, CO 80205",
          food_type: "Puerto Rican",
          rating: 5,
          hours: "11:30PM - 5:00PM",
          phone: "(303) 731-7107",
          truck: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvp.cdn.cityvoterinc.com%2FGetImage.ashx%3Fimg%3D00%2F00%2F08%2F71%2F73%2F52%2F8717352-3048409.jpg&f=1&nofb=1",
          food: "http://areytopuertorricanfood.com/wp-content/uploads/2018/04/arroz-con-gandules.jpg",
          website: "http://areytopuertorricanfood.com/"
        },
        {
          name: "Saba's Ethiopian Food",
          lat: "39.739962",
          long: "-104.953684",
          address: "2812 E Colfax Ave, Denver, CO 80206",
          food_type: "Ethopian",
          rating: 5,
          hours: "2:00PM - 11:00PM",
          phone: "(720) 722-1925",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cLjOQqu4N-boLin0v9emIAHaE9%26pid%3DApi&f=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WZxwy4a6_tEJzLBgj4TdYwHaEK%26pid%3DApi&f=1",
          website: "https://www.sabasethiopianfood.com/"
        },
        {
          name: "Tacos el Huequito",
          lat: "39.779715",
          long: "-104.958395",
          address: "2336 E 46th Ave., Denver, CO 80216",
          food_type: "Mexican",
          rating: 5,
          hours: "8AM - 4PM",
          phone: "(720) 638-4270",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.foodtrucksin.com%2Fsites%2Fdefault%2Ffiles%2Fteh.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iS-KXtbEYoD5UwE_3WlGfQHaFj%26pid%3DApi&f=1",
          website: "https://tacos-el-huequito.business.site/"
        },
        {
          name: "Tocabe, An American Indian Eatery",
          lat: "39.776563",
          long: "-105.034246",
          address: "3536 W 44th Ave, Denver, CO 80211",
          food_type: "Native American",
          rating: 5,
          hours: "11AM - 9PM",
          phone: "(720) 524-8282",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.U1K-ZPG4lf18OrUcvg0s4AHaE7%26pid%3DApi&f=1",
          food: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftocabe.com%2Fwp-content%2Fuploads%2F2013%2F06%2FDSC_29711.jpg&f=1&nofb=1",
          website: "https://tocabe.com/index.php/north-denver/"
        },
        {
          name: "Tocabe, An American Indian Eatery",
          lat: "39.595716",
          long: "-104.893898",
          address: "8181 E Arapahoe Rd C, Greenwood Village, CO 80112",
          food_type: "Native American",
          rating: 5,
          hours: "11AM - 9PM",
          phone: "(720) 524-8282",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.U1K-ZPG4lf18OrUcvg0s4AHaE7%26pid%3DApi&f=1",
          food: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ftocabe.com%2Fwp-content%2Fuploads%2F2013%2F06%2FDSC_29711.jpg&f=1&nofb=1",
          website: "https://tocabe.com/index.php/north-denver/"
        },
        {
          name: "What Would Cheesus Do?",
          lat: "39.751791",
          long: "-104.977742",
          address: "700 E 24th Ave #4, Denver, CO 80205",
          food_type: "Grilled Cheese",
          rating: 5,
          hours: "11AM - 6PM",
          phone: "(720) 672-2562 ",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.X-SgPZrFwmM6w8UI79f0cQHaF9%26pid%3DApi&f=1",
          food: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdiningout.com%2Fdenverboulder%2Fwp-content%2Fuploads%2Fsites%2F13%2F2017%2F06%2F19400671_448727092150132_250108399847012609_o-1024x576.jpg&f=1&nofb=1",
          website: "https://www.whatwouldcheesusdo.com/menu/"
        },
        {
          name: "Steuben's",
          lat: "39.743636",
          long: "-104.980378",
          address: "523 E 17th Ave, Denver, CO 80203",
          food_type: "American Classic",
          rating: 5,
          hours: "3PM - 9PM",
          phone: "(303) 830-1001 ",
          truck: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvp.cdn.cityvoterinc.com%2FGetImage.ashx%3Fimg%3D00%2F00%2F06%2F33%2F17%2F44%2F6331744-1892761.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F303magazine.com%2Fwp-content%2Fuploads%2F2013%2F07%2FIMG_0827-300x200.jpg&f=1&nofb=1",
          website: "https://www.steubens.com/"
        },
        {
          name: "Denver Biscuit Company",
          lat: "39.713782",
          long: "-104.987806",
          address: "141 S Broadway, Denver, CO 80209",
          food_type: "Comfort food",
          rating: 5,
          hours: "8AM - 2PM",
          phone: "(303) 377-7900",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F03%2F3d%2F1b%2F4b%2Fdenver-biscuit-company.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nLu3crex0G0cW7xOAQckZAHaEg%26pid%3DApi%26h%3D160&f=1",
          website: "https://denbisco.com/"
        },
        {
          name: "Biker Jim's Gourmet Dogs",
          lat: "39.745397",
          long: "-105.003292",
          address: "1001 Larimer St, Denver, CO 80204",
          food_type: "Hotdogs",
          rating: 5,
          hours: "10AM - 6PM",
          phone: "(720) 746-9355",
          truck: "https://cdn.vox-cdn.com/thumbor/xrIgmFau-Onu4PCKcgWC2ZI5Inc=/0x0:640x480/720x0/filters:focal(0x0:640x480):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3778448/15948_10151625108877944_1565982467_n.0.jpg",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.uDV5c_bVvFFlppMRAWMD2QHaFM%26pid%3DApi&f=1",
          website: "http://www.bikerjimsdogs.com/"
        },
        {
          name: "Basic Kneads Pizza",
          lat: "39.763179",
          long: "-104.981364",
          address: "3001 Walnut St, Denver, CO 80205",
          food_type: "Pizza",
          rating: 5,
          hours: "4PM - 8PM",
          phone: "(720) 340-1066",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdd%2Fdf%2Fe2%2Fdddfe29ca93650986f097338b0615522.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheknow.denverpost.com%2Fwp-content%2Fuploads%2F2019%2F07%2FBasicKneadsPizza-1080x720.jpg&f=1&nofb=1",
          website: "https://www.basickneadspizza.com/"
        },
        {
          name: "Yatai Food Cart",
          lat: "39.745990",
          long: "-104.990455 ",
          address: "17th Street &, California St, Denver, CO 80293",
          food_type: "Sushi",
          rating: 5,
          hours: "11AM - 6:30PM",
          phone: "(720) 443-1658",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F3778334%2F5505e208-c220-4369-bd74-043346204482.0.JPG&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-media0.fl.yelpcdn.com%2Fbphoto%2F7PIAY8hzxcdB6TFz-WWv7Q%2Fls.jpg&f=1&nofb=1",
          website: "https://yataifoodcart.com/"
        },
        {
          name: "Comida",
          lat: "39.752922",
          long: "-104.877876 ",
          address: "2501 Dallas St, Aurora, CO 80010",
          food_type: "Mexican Soul Food",
          rating: 5,
          hours: "11AM - 9PM",
          phone: "(303) 484-1632",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FlP16Bi9GhoAmlWkAyWhGZNql_zA%3D%2F0x0%3A1600x1073%2F1200x0%2Ffilters%3Afocal(0x0%3A1600x1073)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F3778226%2FSAM_1260-3.0.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.eatcomida.com%2Fwp-content%2Fuploads%2F2012%2F02%2FPage-Pics-horizontal-food-1.jpg&f=1&nofb=1",
          website: "http://www.eatcomida.com/"
        },
        {
          name: "Moo Mobile (Sweet Cow)",
          lat: "39.762433",
          long: "-105.034047",
          address: "3475 W 32nd Ave, Denver, CO 80211",
          food_type: "Ice Cream",
          rating: 5,
          hours: "12PM - 9PM",
          phone: "(303) 477-3269",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FY-LVUNSWJ7oTt2pwnX1fWX2AXME%3D%2F0x0%3A1024x768%2F1200x0%2Ffilters%3Afocal(0x0%3A1024x768)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F3782428%2Fthis-is-boulder-colorado-sweet-cow-moo-mobile.0.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RYmM4OwTOxyfScLu9WxKsAHaE8%26pid%3DApi&f=1",
          website: "https://www.sweetcowicecream.com/"
        },
        {
          name: "",
          lat: "39.682455",
          long: "-104.980322 ",
          address: "1882 S Pearl St, Denver, CO 80210",
          food_type: "Ice Cream",
          rating: 5,
          hours: "12PM - 9PM",
          phone: "(720) 479-8838",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FY-LVUNSWJ7oTt2pwnX1fWX2AXME%3D%2F0x0%3A1024x768%2F1200x0%2Ffilters%3Afocal(0x0%3A1024x768)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F3782428%2Fthis-is-boulder-colorado-sweet-cow-moo-mobile.0.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.RYmM4OwTOxyfScLu9WxKsAHaE8%26pid%3DApi&f=1",
          website: ""
        },
        {
          name: "HEY PB&J",
          lat: "39.772689",
          long: "-104.944991",
          address: "3600 E 40th Ave, Denver, CO 80205",
          food_type: "Peanut Butter & Jelly",
          rating: 5,
          hours: "4PM - 10PM",
          phone: "(303) 369-4653",
          truck: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlyinyourstate.com%2Fwp-content%2Fuploads%2F2017%2F10%2F19248012_1365147606866828_7021082306191055260_n-700x368.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.303magazine.com%2Fuploads%2F2013%2F10%2FHey-4-300x210.jpg&f=1&nofb=1",
          website: "http://www.heypbandj.com/"
        },
        {
          name: "Crock Spot",
          lat: "39.761292",
          long: "-104.982120",
          address: "2863 Larimer St, Denver, CO 80205",
          food_type: "Gourmet Slow Cooked Bowls",
          rating: 5,
          hours: "8AM - 8PM",
          phone: "(720) 675-7720",
          truck: "https://static.wixstatic.com/media/81a4b3_80771ae79d3a4086958c2a17aa734451~mv2.jpg/v1/crop/x_88,y_0,w_847,h_768/fill/w_496,h_450,al_c,q_80,usm_0.66_1.00_0.01/Simmer%20at%2041st%20and%20Pecos.webp",
          food: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fefirstbankblog.com%2Fwp-content%2Fuploads%2F2016%2F07%2FCrock-Spot-food.jpg&f=1&nofb=1",
          website: "https://www.thecrockspot.com"
        },
        {
          name: "Baba's Falafel",
          lat: "39.758559",
          long: "-104.985574",
          address: "1316 26th St, Denver, CO 80205",
          food_type: "Mediterranean",
          rating: 5,
          hours: "11AM - 4PM",
          phone: "",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.juh61Wm4jW0mJK7Tpa3B_wHaFj%26pid%3DApi&f=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fhorseshoemarket%2Fwp-content%2Fuploads%2F2014%2F09%2F18183819%2Fphoto-6.jpg&f=1&nofb=1",
          website: "https://www.facebook.com/BabasFalafel/"
        },
        {
          name: "Waffle Up!",
          lat: "39.721163",
          long: "-104.993887",
          address: "Baker, Denver, CO 80223",
          food_type: "Waffles",
          rating: 5,
          hours: "7AM - 2PM",
          phone: "(303) 744-0174",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fiftbucket%2F2013%2F07%2F18141215%2FCO-denver-liege-WaffleUp.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qT_ki7fClsEsq4p4LlUFwwEsDH%26pid%3DApi&f=1",
          website: "https://www.zomato.com/denver/waffle-up-baker"
        },
        {
          name: "Pierogies Factory",
          lat: "39.769069",
          long: "-105.081842",
          address: "3795 Wadsworth Blvd, Wheat Ridge, CO 80033",
          food_type: "Pierogies",
          rating: 5,
          hours: "11AM - 9PM",
          phone: "(303) 425-7421",
          truck: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages1.westword.com%2Fimager%2Fu%2F745xauto%2F10483098%2Fpierogies-factory-truck.jpg&f=1&nofb=1",
          food: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdenver.cbslocal.com%2Fwp-content%2Fuploads%2Fsites%2F15909806%2F2015%2F11%2Fpierogies-factory.png%3Fw%3D600%26h%3D400%26crop%3D1&f=1&nofb=1",
          website: "https://www.zomato.com/denver/waffle-up-baker"
        }
      ]);
    });
};

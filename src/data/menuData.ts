export type MenuItem = {
  id: number
  name: string
  price: number
  description: string
  vegetarian: boolean
  popular?: boolean
  spicy?: boolean
  image: string
}

export type MenuCategory = {
  key: string
  label: string

  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    key: "momo",
    label: "Momo",

    items: [
      {
        id: 4,
        name: "Chicken Steamed Momo",
        price: 14.0,
        description: "Traditional Nepalese dumplings filled with seasoned chicken",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPARO3289dURlz1qyG8sYLjnRrQ3Ydu0_Vpu01j2gvKdwShtDPtzMkPpD5pZfadeTKTM0EBNjBsi9q-GNYzVyjezw=s680-w680-h510-rw",
      },
      {
        id: 5,
        name: "Fried Momo",
        price: 14.0,
        description: "Crispy golden fried momos with special dipping sauce",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPTL_v0z_BXBTy4GLJ5ET1qQsSRQd2PzjfcTZNcqmBQrb44E0LUyRiZfGVf6w64eqvVsX1HjHFQVDbolRM1s4NMOg=s680-w680-h510-rw",
      },

{
  id: 19,
  name: "Chicken Jhol Momo",
  price: 16.0,
  description: "Steamed chicken dumplings served in a spicy, tangy jhol broth with Nepali herbs and spices",
  vegetarian: false,
  popular: true,
  image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqheErtrb2UuYzVyOKmdVRWvhayYwZXQwmbVwgBxYHloGyluD6MQSaHHFQAVWyeUTSn6ah9GhjMJsEXkKsjHLsG-rgsqnk6SLNWvhi7TgToTa4PXTB7G5ehbKsR04xyxRvEoHbC_A=s680-w680-h510-rw"
},

  {     
       id:6,
        name: "Chili Momo",
        price: 14.0,
        description: "Spicy chili momos in tangy sauce",
        vegetarian: false,
        spicy: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOWbqcPOYT4eY0SGnEi275jsUrRzlxB_Sz_u6ODXBOV-5ie8OQDYbjKKfk6AUTZkc4VRcF_VAH72AQf2A4IUdUbGQ=s680-w680-h510-rw",
      },
      
      {
        id: 7,
        name: "Mithho Piro Momo",
        price: 16.0,
        description: "Our signature spicy fried momo with special house blend",
        vegetarian: false,
        popular: true,
        spicy: true,
        image: "https://lh3.googleusercontent.com/p/AF1QipMkB-mq73ggh4Y29QwDtJl25DJ18qDcOf5qx9P6=s680-w680-h510-rw",
      },
    ],
  },
  {
    key: "starter",
    label: "Starters",
 
    items: [
      {
        id: 1,
        name: "Mustang Alu",
        price: 12.0,
        description: "Traditional Nepalese spiced potatoes from the Mustang region",
        vegetarian: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOSlHPP_swiN67h2l7lH2tj94lzscnDfdFmbgrfv0zbWIxlRnmjGKXCcQhgHjRjKqYWwZDID5_sFLtL--Tl3wv3wA=s680-w680-h510-rw",
      },
      {
        id: 2,
        name: "Chicken Lollipop",
        price: 14.0,
        description: "Crispy chicken wings marinated in aromatic Himalayan spices",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPEXOZogupyFpyXavFh525FQ7e9-ZTuj3UwvjJ7YCUVP_TE5zKQySLxxN-eXUd3mBJHJLLahpXxNM5hz89qqcPdeg=s680-w680-h510-rw",
      },
      {
        id: 3,
        name: "Chicken Sausage",
        price: 14.0,
        description: "House-made chicken sausage with traditional spices",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhM_zltvuRK-pg8wqZQPuPeXcr-cO3HpoBvCyk8bsrn488uAWXGC-nbfziqx1dZo2IhSXV8m31zO6-hFN4wmhO2hcw=s680-w680-h510-rw",
      },
    ],
  },
  {
    key: "noodles",
    label: "Noodles",

    items: [
      {
        id: 8,
        name: "Chicken Chowmein",
        price: 14.0,
        description: "Stir-fried noodles with vegetables and tender chicken",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPdRMXb40ccewZhJMpwSJyIw-KykgX_hdydMP9rP3FVi2n43h3RBbkNe1AhvG2HZkuI9JhNkYvLkX0B-Q0u_EKQ_w=s680-w680-h510-rw",
      },
      {
        id: 9,
        name: "Keema Noodles",
        price: 14.0,
        description: "Spiced minced meat with hand-pulled noodles",
        vegetarian: false,
        popular: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNdlev2vTXUqp9kgzg3jKdk7ca5Sb8glecskFxXOupv3JHovRnSvW1QK9mdo1rxjKE1mQw7v59A4OZHzqRpmM8v2w=s680-w680-h510-rw",
      },
      {
        id: 10,
        name: "Laphing",
        price: 12.0,
        description: "Cold spicy Tibetan noodle dish",
        vegetarian: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhPaFOQ4koUnJ_dZWXF8PPHjk2kHc1h7G2K-SzP9toVWSi_LL81bxS0kMvtTrhZYamYgvytZkrv3YQgXXMqWRRafbw=s680-w680-h510-rw",
      },
      {
        id: 11,
        name: "Mutthuk",
        price: 14.0,
        description: "Traditional hand-pulled noodle soup",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhNl9JCDNhdL-LmpXi0jVsyAr75IWe8whA-_HIzBpHNbq6DqaPjIo5L2-2DEQQQ7t3276PZ6k1rt5L1VOpUQEZ8yyg=s680-w680-h510-rw",
      },
    ],
  },
  {
    key: "Nepali Thali",
    label: "nepali Thali",

    items: [
        {
  id: 18,
  name: "Nepali Thali",
  price: 24.0,
  description: "A traditional Nepali platter with dal, rice, vegetables, pickle, and papad",
  vegetarian: false,
  image: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqTbO39iWOGnfCGkQiAC6a0uzkxWlxl-7QuRDLPZt6d07p13teXMkHMIfDoh2_IsX6L4eiI3cwG45sTt-RPQXUo1_da9rFkJc4Wu-EOnmfF11fdK_6u9SqaEe_q6TjedCz4AMrOHrQD0p6J=s680-w680-h510-rw",
},
      {
        id: 12,
        name: "Chicken Fried Rice",
        price: 13.0,
        description: "Fragrant rice stir-fried with chicken and vegetables",
        vegetarian: false,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMHii4XcpM10fv3TD2_fuWVh3pds2tMKYydVBDGjR0F103L-C9cyr28RjXSfk6i1lCKKRCulfyXAyvzo83HIMBC4g=s680-w680-h510-rw",
      },
    ],
  },
  {
    key: "savouryBites",
    label: "Savoury Bites",

    items: [
      {
        id: 17,
        name: "Chatpate",
        price: 10.0,
        description: "Spicy and tangy street food snack with puffed rice, vegetables, and special sauce",
        vegetarian: true,
        popular: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMu3odBWOghPYYkzcTjD4eqTjUKG1y7wEJXQwKKoNFem5K0H8s_wxUaivdF3N20z2yjDPHLqfY2QtivwcCUOV8ugQ=s680-w680-h510-rw",
      },
    ],
  },
  {
    key: "drinks",
    label: "Drinks",

    items: [
      {
        id: 13,
        name: "Nepali Masala Tea",
        price: 5.0,
        description: "Traditional spiced tea with aromatic Himalayan herbs",
        vegetarian: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhO5GfRs8x0k_YMihCS7euHsmpCTltcXAtPmC0vOudRVUrrWKoVGy5THhC832EPT26NDw2TMIcsPOIMZKIXQ_ccDaA=s680-w680-h510-rw",
      },
      {
        id: 14,
        name: "Mithho Mango",
        price: 7.0,
        description: "Fresh mango smoothie",
        vegetarian: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhOxqu7Iqa2OWRv_cEEWCDdze92vUdmwnLHJtFQdJegcF1fb9DteTt6PF1NMbzOPFoABXPLmE8klMSpbh-eO5EhtSw=s680-w680-h510-rw",
      },
      {
        id: 15,
        name: "Mithho Special Lassi",
        price: 6.0,
        description: "Creamy yogurt drink with cardamom",
        vegetarian: true,
        image: "https://lh3.googleusercontent.com/geofoodgmb/AC9zUhMCmeZ0jyQmXOQ6hv_rTIVQaHxH8lFGPlBSmO5dKSMAoxfUqsy8fbzuo15FOexTSwOW4QfyzCMDoPmvsHMkyblS2w=s680-w680-h510-rw",
      },
    ],
  },
]
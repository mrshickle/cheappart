app.controller('mainController', ["$scope", function($scope) {

    $('select').select2();


    vm = this;
    $scope.sliderData = [
        {
            imgPath: '/mImages/slider2.jpg',
            name: 'Small Package',
            description: 'Pallet',
            startsFrom: '500'

        },
        {
            imgPath: '/mImages/slider1.jpg',
            name: 'Medium Package',
            description: '20 ft container',
            startsFrom: '5000'
        },
        {
            imgPath: '/mImages/slider3.jpg',
            name: 'Large Package',
            description: '40 ft container',
            startsFrom: '15000'
        }
    ]

    $scope.packagesData = [
        {
            imgPath: '/mImages/pallet.jpg',
            name: 'Small Package',
            description: 'Pallet',
            deposit: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000],
            selectedDeposit: 500
        },
        {
            imgPath: '/mImages/20ft.jpg',
            name: 'Medium Package',
            description: '20 ft container',
            deposit: [5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000],
            selectedDeposit: 5000
        },
        {
            imgPath: '/mImages/40ft.jpg',
            name: 'Large Package',
            description: '40 ft container',
            deposit: ['15000', '16000', '17000', '18000', '19000', '20000', '21000', '22000', '23000', '24000', '25000'],
            selectedDeposit: 15000
        },
        {
            imgPath: '/mImages/custom.jpg',
            name: 'Custom Deposit',
            description: 'Enter a custom deposit amount',
            selectedDeposit: ''
        }
    ]
}])
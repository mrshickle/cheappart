//carPartsDirectives = angular.module('carPartsDirectives', [])
app
    .directive('headerDirective', function () {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/header.html',
            controller: function() {
                if (jQuery().select2) {

                    var selectOptions = {
                        //minimumResultsForSearch: -1,  // Disable search feature in drop down
                        width: 'off'
                    };

                    $('select').select2(selectOptions);
                }
            }
        };
    })
    .directive('slider', function() {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/slider.html',
            link: function(scope) {
                var $window = $(window);

                function centerSlideDetails(slideHeight) {
                    var slider = '',
                        siteHeader = $('.site-header'),
                        isHeaderOne = siteHeader.hasClass('header-variation-one') && $window.width() > 1182;

                    if (homepageSlider.hasClass('slider-variation-two')) {
                        slider = $('.slider-variation-two .slides li');
                    }else if (homepageSlider.hasClass('slider-variation-three')) {
                        slider = $('.slider-variation-three .slides li');
                    }

                    if( !slideHeight && slider ){
                        slideHeight = slider.first().height();
                    }

                    if(slider){
                        slider.each(function () {
                            var slideOverlay = $(this).find('.slide-inner-container');
                            if (isHeaderOne) {
                                slideOverlay.css('top', siteHeader.height() + 40);
                            } else {
                                slideOverlay.css('top', Math.abs(((slideHeight - slideOverlay.outerHeight()) / 2)));
                            }
                        });
                    }
                }

                $window.on('load resize', function () {
                    centerSlideDetails();
                });
            }
        }
    })
    .directive('packages', function () {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/packages.html',
            controller: function() {
                if (jQuery().select2) {

                    var selectOptions = {
                        //minimumResultsForSearch: -1,  // Disable search feature in drop down
                        width: 'off'

                    };

                    $('select').select2(selectOptions);
                }
            }
        };
    })
    .directive('deposit', function () {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/deposit.html',
            controller: function() {
                if (jQuery().select2) {

                    var selectOptions = {
                        //minimumResultsForSearch: -1,  // Disable search feature in drop down
                        width: 'off'

                    };

                    $('select').select2(selectOptions);
                }
            }
        };
    })
    .directive('detailsDirective', function() {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/details.html'
        }
    })
    .directive('footerDirective', function() {
        return {
            restrict: 'E',
            templateUrl: '/js/directives/footer.html'
        }
    })

$(function () {

            $('#dashboard').igTileManager({
                layoutConfiguration: {
                    gridLayout: {
                        columnWidth: '25%',
                        columnHeight: '50%',
                        marginLeft: 10,
                        marginTop: 10
                    },
                    items: [
                        { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
                        { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                        { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
                    ]
                },

                rightPanelTilesWidth: 200,
                dataSource: dataSource,
                rightPanelCols: 2,
                maximizedState: '<h3 class="name">${name}</h3>' +
                    '<div class="gallery" class="dashboard">{{each ${pictures} }}<div><img src=\'${pictures.src}\' /></div>{{/each}}</div>' +
                    '<ul><li>Discount: <span class="promo">${discount}%</span></li><li>Price: <span class="price">$${price}</span></li><li>Screen Size: ${specs.screenSize}</li><li>Processor: ${specs.processor}</li><li>Memory: ${specs.memory}</li>' +
                    '<li>Hard Drive: ${specs.hardDrive}</li><li>Video Card: ${specs.videoCard}</li></ul>' + 
                    '<button id="btn-add" value="Add to cart"><img class="cart-icon-small" src="http://staging.igniteui.local/13-2/images/samples/tile-manager/computer-store/cart.png" />Add to cart</button>',
                minimizedState: '<h4 class="name">${name}</h4><img src="${featuredPicture}" class="minimized" title="${name}" alt="error" />' +
                    '{{if ${discount} != 0 }}<div class="discount">- ${discount}%</div> {{/if}}' +
                    '<div>Price: <span class="price">$${price}</span><a href="#"></a><img title="Add to cart" class="cart-icon" src="http://staging.igniteui.local/13-2/images/samples/tile-manager/computer-store/cart.png" /></div>',
                    
                rendered: function (event, ui) {
                    
                },
                tileMaximizing: function (event, ui) {
                    if ($(event.toElement).attr('class') == "cart-icon") {
                        event.preventDefault();
                        event.stopPropagation();
                        var itemPrice = ui.tile.find('.price').text();
                        var itemName = ui.tile.find('.name').text();
                        addItemToCart(itemName, itemPrice);
                    }
                },
                tileMaximized: function (event, ui) {
                    ui.tile.find('.gallery').height(600).igTileManager({
                        layoutConfiguration: {
                            gridLayout: {
                                columnWidth: '25%',
                                columnHeight: '25%',
                                marginLeft: 10,
                                marginTop: 10
                            },
                            items: [
                                { rowIndex: 0, colIndex: 0, rowSpan: 4, colSpan: 3 },
                                { rowIndex: 0, colIndex: 3, rowSpan: 1, colSpan: 1 },
                                { rowIndex: 1, colIndex: 3, rowSpan: 1, colSpan: 1 },
                                { rowIndex: 2, colIndex: 3, rowSpan: 1, colSpan: 1 },
                                { rowIndex: 3, colIndex: 3, rowSpan: 1, colSpan: 1 }
                            ]
                        },
                        rightPanelTilesHeight: 140
                    });
                    $('#btn-add').on('click', function () {
                        var itemName = $(this).parent().find('.name').text();
                        var itemPrice = $(this).parent().find('.price').text();
                        addItemToCart(itemName, itemPrice);
                    });
                },
                tileRendered: function (evt, ui) {
                    ui.tile.find('.discount').parent().css('background-color', 'rgba(0, 148, 255, 0.21)');
                }
            });           

            function addItemToCart(name, price) {
                $('<li>' + name + ' - <span class="totalAmount">' + price + ' </span><input type="button" class="removeItem" value="[x]" /></li>').appendTo('#cart-items');
                var itemsCount = parseInt($('#items-count').text());
                $('#items-count').text(itemsCount + 1);
                var total = 0;
                var prices = $('.totalAmount');
                $.each(prices, function (index, value) {
                    var val = parseInt(value.innerText.substring(1));
                    total += val;
                });
                $('#total').html(total);
            }

            $('#shopping-cart').on('click', '.removeItem', function () {
                var value = $(this).parent().find('.totalAmount')[0].innerHTML;
                $(this).parent().remove();
                var itemsCount = parseInt($('#items-count').text());
                $('#items-count').text(itemsCount - 1);
                
                var price = parseInt(value.substring(1));
                //$('#total').html('Total: $' + );
                var total = parseInt($('#total').html());
                $('#total').html(total - price);
            });
        });
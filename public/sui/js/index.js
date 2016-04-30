$(function() {

    // 首页
    $(document).on('pageInit', '#page-index', function(e, id, page) {
        // 首页
        $(".swiper-container").swiper({
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2000,
            loop: true,
            autoplayDisableOnInteraction: false
        });
    });

    // 列表页
    $(document).on("pageInit", "#prolistpage", function(e, id, page) {
        var loading = false;
        // 每次加载添加多少条目
        var itemsPerLoad = 20;
        // 最多可加载的条目
        var maxItems = 100;
        var lastIndex = $('#' + id + ' .list-container li').length;


        var sortAsc, //积分排序
            sortDes, //积分弹层
            layerBg; //蒙层

        //页面初始化入口
        function init() {
            initDom();

            bindEvent();
        }
        //
        function initDom() {
            sortAsc = $('#' + id + '.sort-asc');
            sortDes = $('#' + id + ' .sort-des');
            layerBg = $('#' + id + ' .layerBg');
        }
        //事件绑定
        function bindEvent() {

            //积分排序事件
            sortAsc.on('click', function(e) {
                if (sortDes.hasClass('disN')) {
                    sortDes.removeClass('disN').addClass('disB');
                    layerBg.addClass('disB');
                } else {
                    sortDes.removeClass('disB').addClass('disN');
                    layerBg.removeClass('disB');
                }
            });

        }

        $(document).on('click', '#' + id + ' .create-actions', function() {
            var buttons1 = [{
                text: '请选择',
                label: true
            }, {
                text: '全部',
                bold: true,
                color: 'danger'
            }, {
                text: '家居用品'
            }, {
                text: '家用电器'

            }, {
                text: '健康个护'
            }, {
                text: '数码娱乐'
            }, {
                text: '户外运动'
            }, {
                text: '母婴电子'
            }];
            var buttons2 = [{
                text: '取消',
                bg: 'danger'
            }];
            var groups = [buttons1, buttons2];
            $.actions(groups);
        });

        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += '<li><div class="item-content"><div class="item-media"><img src="../img/gril.jpg" style="width: 4.3rem;"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">碧欧泉Biotherm 活泉嫩手霜 50ml</div></div><div class="item-subtitle">积分 <span class="bigfont-orange">38,090</span></div><p><a href="#proinfo" class="button button-warning button-change pull-right">立即兑换</a></p></div></div></li>';
            }
            // 添加新条目
            $('#' + id + ' .infinite-scroll .list-container').append(html);
        }
        $(page).on('infinite', function() {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;
                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 删除加载提示符
                    $('#' + id + ' .infinite-scroll-preloader').remove();
                    return;
                }
                addItems(itemsPerLoad, lastIndex);
                // 更新最后加载的序号
                lastIndex = $('#' + id + ' .list-container li').length;
                $.refreshScroller();
            }, 1000);
        });
    });

    // 详情页
    $(document).on('pageInit', '#proinfo', function(e, id, page) {
        $('#' + id + " .swiper-container").swiper({
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2000,
            loop: true,
            autoplayDisableOnInteraction: false
        });
    });

    // 兑换记录
    $(document).on("pageInit", "#exchange", function(e, id, page) {
        var loading = false;
        // 每次加载添加多少条目
        var itemsPerLoad = 20;
        // 最多可加载的条目
        var maxItems = 100;
        var lastIndex = $('#' + id + ' .list-container li').length;

        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += '<li class="item-content1"><a href="#orderdetail" class="item-link item-content"><ul style="padding-left:0; width:100%;"><li><div class="item-inner"><div class="item-title-row"><div class="item-title">订单编号：12398735873987 已完成</div></div><div class="item-subtitle">兑换日期：2015.12.30 13:45</div><div class="item-text">消费积分：3545</div></div></li><li><div class="item-media"><img src="../img/gril.jpg" width="54"></div></li></ul></a></li>';
            }
            // 添加新条目
            $('#' + id + ' .infinite-scroll .list-container').append(html);
        }
        $(page).on('infinite', function() {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;
                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('#' + id + ' .infinite-scroll'));
                    // 删除加载提示符
                    $('#' + id + ' .infinite-scroll-preloader').remove();
                    return;
                }
                addItems(itemsPerLoad, lastIndex);
                // 更新最后加载的序号
                lastIndex = $('#' + id + ' .list-container li').length;
                $.refreshScroller();
            }, 1000);
        });
    });

    // 个人中心
    $(document).on("pageInit", "#integral", function(e, id, page) {
        var loading = false;
        // 每次加载添加多少条目
        var itemsPerLoad = 20;
        // 最多可加载的条目
        var maxItems = 100;
        var lastIndex = $('.list-container li')[0].length;

        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += '<li><div class="item-content"><div class="item-inner"><div class="item-title-row"><div class="item-title">新信息新信息新信息</div><div class="item-after">+65</div></div><div class="item-subtitle">2015.12.30 13:45</div></div></div></li>';
            }
            // 添加新条目
            $('.infinite-scroll.active .list-container').append(html);
        }
        $(page).on('infinite', function() {
            // 如果正在加载，则退出
            if (loading) return;
            // 设置flag
            loading = true;
            var tabIndex = 0;
            //if($(this).find('.infinite-scroll.active').attr('id') == "tab1"){
            ////tabIndex = 0;
            //}
            if ($(this).find('.infinite-scroll.active').attr('id') == "tab2") {
                tabIndex = 0;
            }
            lastIndex = $('.list-container').eq(tabIndex).find('li').length;
            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;
                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    //$.detachInfiniteScroll($('.infinite-scroll').eq(tabIndex));
                    // 删除加载提示符
                    $('.infinite-scroll-preloader').eq(tabIndex).hide();
                    return;
                }
                addItems(itemsPerLoad, lastIndex);
                // 更新最后加载的序号
                lastIndex = $('.list-container').eq(tabIndex).find('li').length;
                $.refreshScroller();
            }, 1000);
        });
    });

    // 填写订单信息
    $(document).on('pageInit', '#orderfill', function(e, id, page) {

    });

    // 地址
    $(document).on('pageInit', '#address', function(e, id, page) {
        $("#city-picker").cityPicker({
            value: ['天津', '河东区']
            //value: ['四川', '内江', '东兴区']
        });

        // 删除 地址
        $('#addressdel').on('click', function(e) {
            $.confirm('确定删除么？', function () {
                $.toast("啊！我被无情的删除了!!");
            });
        });
    });




    $.init();
});

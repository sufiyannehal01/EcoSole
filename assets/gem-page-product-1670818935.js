

    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1670819374201').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    (function(jQuery) {
  var $module = jQuery('#m-1670819374205').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
    
    (function( jQuery ){
  var $module = jQuery('#m-1670819374268').children('.module');
  var style = $module.attr('data-style');
  var updatePrice = $module.attr('data-updateprice');

  $module.gfV3ProductQuantity({
    'style': style,
    'updatePrice': updatePrice
  });
})( window.GemQuery || jQuery );
(function( jQuery ){
  var $module = jQuery('#m-1670819374317').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
  
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    (function(jQuery) {
    var $module = jQuery('#m-1670819374233').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
  (function(jQuery) {
  var $module = jQuery('#m-1670819374206').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {
      console.log('url', imageUrl)
    }
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
      responsiveClass:true,
      responsive:{
        0:{
          items:colxs,
          nav: navxs,
          dots:dotsxs,
          margin: marginxs
        },
        768:{
          items:colsm,
          nav: navsm,
          dots:dotssm,
          margin: marginsm
        },
        992:{
          items:colmd,
          nav: navmd,
          dots:dotsmd,
          margin: marginmd
        },
        1200:{
          items:collg,
          nav: navlg,
          dots:dotslg,
          margin: marginlg
        }
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery);
    (function( jQuery ){
  var $module = jQuery('#m-1670819374265').children('.module');
  var activeTab = parseInt($module.attr('data-activeTab')) - 1;
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  $module.gfV3ResTabs({
      'activeTab': activeTab,
      'mode': mode,
      tabSelected: function(index) {
        var tabInactiveBgColor = $module.attr('data-inactiveTabBgColor');
        var tabInactiveColor = $module.attr('data-inactiveTabColor');
        var tabBgColor = $module.attr('data-tabBgColor');
        var tabColor = $module.attr('data-tabColor');
        var borderColor = $module.attr('data-borderColor');
        var borderSize = $module.attr('data-borderSize');

        var $gfTabs = $module.find('>ul>li.gf_tab');
        var $gfTabActive = $module.find('>ul>li.gf_tab-active');
        var $gfTabPanels = $module.find('>.gf_tab-panel');

        if($module.hasClass('style1')) {
          $gfTabs
            .css('margin-left', '-' + borderSize)
            .css('border', borderSize + ' solid ' + borderColor)
            .css('border-bottom', borderSize + ' solid ' + borderColor);

          $module.find('>ul>li.gf_tab:first').css('margin-left', '0px');

        } else if($module.hasClass('style3')) {
          $gfTabs.css('border-bottom', borderSize + ' solid ' + tabBgColor);
        }

        if(!$module.hasClass('style3')) {
          $gfTabs.css('background-color', tabInactiveBgColor);
          $gfTabActive.css('background-color', tabBgColor);
        }

        $gfTabs.css('color', tabInactiveColor);
        $gfTabActive.css('color', tabColor);

        if($module.hasClass('style1')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', tabBgColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        } else if($module.hasClass('style3')) {
          $gfTabActive.children('.gf_tab-bottom')
          .css('backgroundColor', borderColor)
          .css('height', borderSize)
          .css('bottom', '-' + borderSize);
        }
        $gfTabPanels
        .css('top', '-' + borderSize)
        .css('background-color', tabBgColor)
        .css('border', '1px solid ' + borderColor);

        if($module.hasClass('style1')) {
          $gfTabPanels.css('border', borderSize + ' solid ' + borderColor);
        } else {
          $gfTabPanels.css('border', 'none');
        }
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
            if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
                jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
            }	
        });
      }
  });
  if(mode == 'dev') {
    var moduleId = "1670819374265";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1670819374265") {
      window.getTab1670819374265 = function() {
        return $module.data('gfv3restabs');
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1670819374456').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'production') { 
    $module.children('form').on('submit', function() {
      try {
        localStorage.setItem('gemId', '#m-1670819374456');
      } catch(err) {}
    });

    var gemId = '';
    try {
      var gemId = localStorage.getItem('gemId');
    } catch(err) {}

    if(gemId != '') {
      var moduleId = '#' + $module.parent().attr('id');
      if(gemId == moduleId) {
        $module.find(".note").show();
        
        var $note = $module.find('.note.form-success, .note.form-error');
        if ($note.length > 0) {
          $popup = $module.closest('.module-wrap[data-label="Popup"]');
          if ($popup.children('.module').data('gfv1popup')) {
            $popup.children('.module').data('gfv1popup').show();
          }
        }
          
        var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';

        if(cbLink && cbLink != '') {
          try {
            localStorage.setItem('gemId', 'redirected');
          } catch(err) {}

          var target = $module.attr("data-target") || '';
          if(target!=="_blank"){
            window.location.href = cbLink;
          }else {
            window.open(cbLink, '_blank')
          }
        }
      }
    } else {
      var cbLink = $module.find('input[name="gemcallback"]').val() != undefined ? jQuery.trim($module.find('input[name="gemcallback"]').val()) : '';
      
      var $note = $module.find('.note.form-success, .note.form-error');
      if ($note.length > 0) {
        $popup = $module.closest('.module-wrap[data-label="Popup"]');
        if ($popup.children('.module').data('gfv1popup')) {
          $popup.children('.module').data('gfv1popup').show();
        }
      }

      if(cbLink && cbLink != '') {
        var target = $module.attr("data-target") || '';
        if(target!=="_blank"){
          window.location.href = cbLink;
        }else {
          window.open(cbLink, '_blank')
        }
      }
    }
  }
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    (function( jQuery ){
  try {
    var $module = jQuery('#m-1670819374460').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1670819374492').children('.module');
  // You can add custom Javascript code right here.
  if($('.gempage-editing').length < 1){
    jQuery('.scroll_top').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1000);
    });
  }
})( window.GemQuery || jQuery );
    
                          (function( jQuery ){
                              try{
                                  if(jQuery().gfV2Lazyload){
                                      var $module = jQuery(window);
                                      $module.gfV2Lazyload({delay:125})
                                  }
                              }catch(err){
                                  console.error(err)
                              }
                          })( window.GemQuery || jQuery );
                      
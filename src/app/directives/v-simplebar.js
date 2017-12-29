import Vue from 'vue'

Vue.directive('simplebar', {
    bind: function (el, binding, vnode) {
        var $this = $(el);

        window['simplebar-'+vnode.context._uid] = new SimpleBar($this[0]);

        $this.on('mousewheel', function(event) {
            window['simplebar-'+vnode.context._uid].recalculate();
        }); 


        if (binding.modifiers.bottom) {
            var scroll_element = window['simplebar-'+vnode.context._uid].getScrollElement()
            setTimeout(function(){ $(scroll_element).animate({ scrollTop: $(scroll_element).prop("scrollHeight")}, 500); }, 100)
        }
    }
})
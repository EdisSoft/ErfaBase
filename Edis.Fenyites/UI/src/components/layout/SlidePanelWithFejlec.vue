<template>
  <transition name="slidePanel">
    <div
      v-show="visible"
      v-click-outside="Hide"
      class="slidePanel slidePanel-right slidePanel-show w-p15 w-p50"
      style="overflow-y: auto;"
    >
      <div class="slidePanel-content">
        <header class="slidePanel-header p-15" v-if="fejlecCim">
          <div
            class="slidePanel-actions"
            aria-label="actions"
            role="group"
            style="min-height:40px;"
          >
            <button
              type="button"
              class="btn btn-icon btn-pure btn-inverse slidePanel-close actions-top icon wb-close blue-grey-800 py-0 px-0"
              @click="Hide()"
              aria-hidden="true"
            ></button>
          </div>
          <h1 class="blue-grey-800">{{ fejlecCim }}</h1>
        </header>
        <div style="position:relative;width:100%; height:calc(100vh - 70px)">
          <iframe
            :src="url"
            width="100%"
            style="min-width:50%vw"
            height="100%"
            frameBorder="0"
            @load="EndLoader()"
          ></iframe>
          <div
            v-if="isLoading"
            class="vertical-align text-center"
            style="position:absolute; left:0; right:0; bottom:0; top:0; background-color:white;"
          >
            <div class="loader vertical-align-middle loader-ellipsis"></div>
          </div>
          <!-- <slot></slot> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import { apiService } from '../../main';
import { eventBus } from '../../main';
import settings from '../../data/settings';

export default {
  name: 'k-slide-panel-with-fejlec',
  props: ['id'],
  data: function() {
    return {
      visible: false,
      canClose: true,
      url: '',
      fejlecCim: null,
      isActive: false,
      isLoading: false,
      urlLoadStartTime: 0,
    };
  },
  mounted: function() {
    var vm = this;

    eventBus.$on('Sidebar:' + vm.id, ({ state, data }) => {
      if (state) {
        this.Show(data.Url, data.FejlecCim);
      } else {
        this.Hide();
      }
    });
  },
  methods: {
    FanyCategory: function(event) {
      this.isActive = true;
    },
    Show: function(url, fejlecCim) {
      this.url = url;
      this.visible = true;
      this.fejlecCim = fejlecCim;
      this.canClose = false;
      setTimeout(() => {
        this.canClose = true;
      }, 350);
    },
    Hide: function() {
      if (!this.canClose) {
        return;
      }
      if (this.visible) {
        $('.dataTable tr.active').removeClass('active');
      }
      this.visible = false;
      this.isActive = false;
      this.url = '';
      //apiService.GetFanyFenyitesByFegyelmiUgyId({ id:'todo' });
    },
    StartLoader: function() {
      this.isLoading = true;
    },
    EndLoader: function() {
      this.isLoading = false;

      if (this.url) {
        var time = new Date();

        var dist = time - this.urlLoadStartTime;

        var milliseconds = dist % 1000;
        dist = parseInt(dist / 1000);
        var seconds = dist % 60;
        dist = parseInt(dist / 60);
        var minutes = dist % 60;
        dist = parseInt(dist / 60);
        var hours = dist;

        // Will display time in 10:30:23 format
        var formattedTime =
          hours + ':' + minutes + ':' + seconds + '.' + milliseconds;

        var url =
          settings.baseUrl +
          'Api/Diagnostics/InfoLog?data=' +
          encodeURIComponent('FANY bet??lt??si id??:' + formattedTime) +
          '  \n' +
          'url: ' +
          encodeURIComponent(this.url);
        $.post(url);
      }
    },
  },
  watch: {
    url: {
      handler: function(value) {
        if (value) {
          this.StartLoader();
          this.urlLoadStartTime = new Date();
        }
      },
      immediate: true,
    },
  },
  destroyed: function() {},
};
</script>
<style scoped>
.slide-overlay {
  background: #92929257;
  position: fixed;
  left: 0;
  z-index: 999999;
  transition: background-color 0.5s ease;
}

.page-header {
  position: relative;
  padding: 30px 30px;
  margin-top: 0;
  margin-bottom: 0;
  background: transparent;
  border-bottom: 0;
}

.slidePanel-enter-active {
  transition: all 0.5s;
}

.slidePanel-leave-active {
  transition: all 0.5s;
}

.slidePanel-enter,
.slidePanel-leave-to {
  transform: translateX(100%);
}

.slidePanelOverlay-enter-active {
  transition: all 0.5s;
}

.slidePanelOverlay-leave-active {
  transition: all 0.5s;
}

.slidePanelOverlay-enter,
.slidePanelOverlay-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.slidePanel-content {
  height: 100%;
}

.slidePanel .actions-top {
  position: absolute;
  top: 30px;
  right: 20px;
}
</style>

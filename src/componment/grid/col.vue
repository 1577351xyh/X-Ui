<template>
    <div class="col"
         :class="colClass"
         :style="colStyle">
        <div style="height: 50px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let validator = (value)=>{
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key=>{
            if(!['span','offset'].includes(key)){
                valid = false;
            }
        });
        return valid;
    };
    export default {
        props:{
            span:{
                type:[Number,String]
            },
            offset:{
                type:[Number,String]
            },
            phone: {type: Object, validator,},
            ipad:{type: Object, validator,},
            narrowPc:{type: Object, validator,},
            pc:{type: Object, validator,},
            widePc:{type: Object, validator,},
        },
        data(){
            return{
                gutter: 0
            }
        },
        computed:{
            colClass(){
                let {span,offset,phone,ipad,narrowPc,pc,widePc} = this;
                let phoneClass=[];
                if(phone){
                    phoneClass=[`col-phone-${phone.span}`]
                }
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(phone ?[`col-phone-${phone.span}`]:[]),
                    ...(ipad ?[`col-ipad-${ipad.span}`]:[]),
                    ...(narrowPc? [`col-narrow-pc${narrowPc.span}`]:[]),
                    ...(pc ?[`col-pc-${pc.span}`]:[]),
                    ...(widePc ?[`col-wide-pc${phone.span}`]:[])
                ]
            },
            colStyle(){
              return{
                  paddingLeft:this.gutter/2 +'px',
                  paddingRight:this.gutter/2 +'px'
              }
            }
        },
    }
</script>

<style scoped lang="scss" type="text/scss">
    .col{
        height: 50px;
        width: 50%;
        $class-prefix:col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%;
        }
        }
        $class-prefix:offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }

    @media (max-width:576px) {
        $class-prefix:col-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-phone-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    @media (min-width:576px) and (max-width:768px) {
        $class-prefix:col-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-ipad-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    @media (min-width:769px) and (max-width:992px) {
        $class-prefix:col-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-narrow-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    @media (min-width:993px) and (max-width:1200px) {
        $class-prefix:col-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    @media (min-width:1200px) {
        $class-prefix:col-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix:offset-wide-pc-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24)*100%;
            }
        }
    }
    }
</style>

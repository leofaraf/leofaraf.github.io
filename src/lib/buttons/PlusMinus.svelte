<style>
    .icon-container {
        border: 3px solid black;
        border-radius: 100%;
        min-width: 25px;
        min-height: 25px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .collapse-icon {
        position: relative;
        width: 13px;
        height: 13px;

        &:before,
        &:after{
            content: "";
            position: absolute;
            background-color: black;
            transition: transform 300ms cubic-bezier(0.4, 0, 0.4, 1);
        }

        /* Vertical line */
        &:before{
            top: 0;
            left: 50%;
            width: 3px;
            height: 100%;
            margin-left: -1.5px;
        }

        /* horizontal line */
        &:after{
            top: 50%;
            left: 0;
            width: 100%;
            height: 3px;
            margin-top: -1.5px;
            margin-left: 0px;
        }
        
        &.active{
            cursor: pointer;
            
            &:before { transform: rotate(-270deg); }
            &:after { transform: rotate(-180deg); }
        }
    }
</style>

<div class="icon-container">
    <div class="collapse-icon {$$props.status}"></div>
</div>
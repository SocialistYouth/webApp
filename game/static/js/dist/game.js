class WeGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
<div class="ac-game-menu">
    <div class="ac-game-menu-field">
        <div class="ac-game-menu-field-item ac-game-menu-field-single">
            单人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-multi">
            多人模式
        </div>
        <br>
        <div class="ac-game-menu-field-item ac-game-menu-field-settings">
            设置
        </div>
    </div>
</div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single = this.$menu.find('.ac-game-menu-field-single');
        this.$multi = this.$menu.find('.ac-game-menu-field-multi');
        this.$settings = this.$menu.find('.ac-game-menu-field-settings');

        this.start();
    }

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;
        this.$single.click(function() {
            outer.hide();
            outer.root.playground.show();
        });
        this.$multi.click(function() {
            console.log("click multi");
        });
        this.$settings.click(function() {
            console.log("click settings");
        });
    }

    show() { //显示menu界面
        this.$menu.show();
    }

    hide() { //关闭menu界面
        this.$menu.hide();
    }
}
class WeGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`
<div>游戏界面</div>
`);
        this.hide();
        this.root.$ac_game.append(this.$playground);

        this.start();
    }

    start() {
    }

    show() { //打开playground界面
        this.$playground.show();
    }

    hide() { //关闭playground界面
        this.$playground.hide();
    }
}
class WeGame {
    constructor(id) {
        this.id = id;
        this.$ac_game = $('#' + id);
        this.menu = new WeGameMenu(this);
        this.playground = new WeGamePlayground(this);

        this.start();
    }

    start() {

    }
}

//// [commentsClassMembers.ts]

/** This is comment for c1*/
class c1 {
    /** p1 is property of c1*/
    public p1: number;
    /** sum with property*/
    public p2(/** number to add*/b: number) {
        return this.p1 + b;
    }
    /** getter property*/
    public get p3() {
        return this.p2(this.p1);
    }
    /** setter property*/
    public set p3(/** this is value*/value: number) {
        this.p1 = this.p2(value);
    }
    /** pp1 is property of c1*/
    private pp1: number;
    /** sum with property*/
    private pp2(/** number to add*/b: number) {
        return this.p1 + b;
    }
    /** getter property*/
    private get pp3() {
        return this.pp2(this.pp1);
    }
    /** setter property*/
    private set pp3( /** this is value*/value: number) {
        this.pp1 = this.pp2(value);
    }
    /** Constructor method*/
    constructor() {
    }
    /** s1 is static property of c1*/
    static s1: number;
    /** static sum with property*/
    static s2(/** number to add*/b: number) {
        return c1.s1 + b;
    }
    /** static getter property*/
    static get s3() {
        return c1.s2(c1.s1);
    }
    /** setter property*/
    static set s3( /** this is value*/value: number) {
        c1.s1 = c1.s2(value);
    }
    public nc_p1: number;
    public nc_p2(b: number) {
        return this.nc_p1 + b;
    }
    public get nc_p3() {
        return this.nc_p2(this.nc_p1);
    }
    public set nc_p3(value: number) {
        this.nc_p1 = this.nc_p2(value);
    }
    private nc_pp1: number;
    private nc_pp2(b: number) {
        return this.nc_pp1 + b;
    }
    private get nc_pp3() {
        return this.nc_pp2(this.nc_pp1);
    }
    private set nc_pp3(value: number) {
        this.nc_pp1 = this.nc_pp2(value);
    }
    static nc_s1: number;
    static nc_s2(b: number) {
        return c1.nc_s1 + b;
    }
    static get nc_s3() {
        return c1.nc_s2(c1.nc_s1);
    }
    static set nc_s3(value: number) {
        c1.nc_s1 = c1.nc_s2(value);
    }

    // p1 is property of c1
    public a_p1: number;
    // sum with property
    public a_p2(b: number) {
        return this.a_p1 + b;
    }
    // getter property
    public get a_p3() {
        return this.a_p2(this.a_p1);
    }
    // setter property
    public set a_p3(value: number) {
        this.a_p1 = this.a_p2(value);
    }
    // pp1 is property of c1
    private a_pp1: number;
    // sum with property
    private a_pp2(b: number) {
        return this.a_p1 + b;
    }
    // getter property
    private get a_pp3() {
        return this.a_pp2(this.a_pp1);
    }
    // setter property
    private set a_pp3(value: number) {
        this.a_pp1 = this.a_pp2(value);
    }
    
    // s1 is static property of c1
    static a_s1: number;
    // static sum with property
    static a_s2(b: number) {
        return c1.a_s1 + b;
    }
    // static getter property
    static get a_s3() {
        return c1.s2(c1.s1);
    }
    
    // setter property
    static set a_s3(value: number) {
        c1.a_s1 = c1.a_s2(value);
    }

    /** p1 is property of c1 */
    public b_p1: number;
    /** sum with property */
    public b_p2(b: number) {
        return this.b_p1 + b;
    }
    /** getter property */
    public get b_p3() {
        return this.b_p2(this.b_p1);
    }
    /** setter property */
    public set b_p3(value: number) {
        this.b_p1 = this.b_p2(value);
    }
    /** pp1 is property of c1 */
    private b_pp1: number;
    /** sum with property */
    private b_pp2(b: number) {
        return this.b_p1 + b;
    }
    /** getter property */
    private get b_pp3() {
        return this.b_pp2(this.b_pp1);
    }
    /** setter property */
    private set b_pp3(value: number) {
        this.b_pp1 = this.b_pp2(value);
    }
    
    /** s1 is static property of c1 */
    static b_s1: number;
    /** static sum with property */
    static b_s2(b: number) {
        return c1.b_s1 + b;
    }
    /** static getter property 
    */
    static get b_s3() {
        return c1.s2(c1.s1);
    }
    
    /** setter property 
    */
    static set b_s3(value: number) {
        /** setter */
        c1.b_s1 = c1.b_s2(value);
    }
}
var i1 = new c1();
var i1_p = i1.p1;
var i1_f = i1.p2;
var i1_r = i1.p2(20);
var i1_prop = i1.p3;
i1.p3 = i1_prop;
var i1_nc_p = i1.nc_p1;
var i1_ncf = i1.nc_p2;
var i1_ncr = i1.nc_p2(20);
var i1_ncprop = i1.nc_p3;
i1.nc_p3 = i1_ncprop;
var i1_s_p = c1.s1;
var i1_s_f = c1.s2;
var i1_s_r = c1.s2(20);
var i1_s_prop = c1.s3;
c1.s3 = i1_s_prop;
var i1_s_nc_p = c1.nc_s1;
var i1_s_ncf = c1.nc_s2;
var i1_s_ncr = c1.nc_s2(20);
var i1_s_ncprop = c1.nc_s3;
c1.nc_s3 = i1_s_ncprop;
var i1_c = c1;
class cProperties {
    private val: number;
    /** getter only property*/
    public get p1() {
        return this.val;
    }
    public get nc_p1() {
        return this.val;
    }
    /**setter only property*/
    public set p2(value: number) {
        this.val = value;
    }
    public set nc_p2(value: number) {
        this.val = value;
    }
}
var cProperties_i = new cProperties();
cProperties_i.p2 = cProperties_i.p1;
cProperties_i.nc_p2 = cProperties_i.nc_p1;


//// [commentsClassMembers.js]
var c1 = (function () {
    function c1() {
    }
    c1.prototype.p2 = function (b) {
        return this.p1 + b;
    };
    Object.defineProperty(c1.prototype, "p3", {
        get: function () {
            return this.p2(this.p1);
        },
        set: function (value) {
            this.p1 = this.p2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.pp2 = function (b) {
        return this.p1 + b;
    };
    Object.defineProperty(c1.prototype, "pp3", {
        get: function () {
            return this.pp2(this.pp1);
        },
        set: function (value) {
            this.pp1 = this.pp2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.s2 = function (b) {
        return c1.s1 + b;
    };
    Object.defineProperty(c1, "s3", {
        get: function () {
            return c1.s2(c1.s1);
        },
        set: function (value) {
            c1.s1 = c1.s2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.nc_p2 = function (b) {
        return this.nc_p1 + b;
    };
    Object.defineProperty(c1.prototype, "nc_p3", {
        get: function () {
            return this.nc_p2(this.nc_p1);
        },
        set: function (value) {
            this.nc_p1 = this.nc_p2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.nc_pp2 = function (b) {
        return this.nc_pp1 + b;
    };
    Object.defineProperty(c1.prototype, "nc_pp3", {
        get: function () {
            return this.nc_pp2(this.nc_pp1);
        },
        set: function (value) {
            this.nc_pp1 = this.nc_pp2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.nc_s2 = function (b) {
        return c1.nc_s1 + b;
    };
    Object.defineProperty(c1, "nc_s3", {
        get: function () {
            return c1.nc_s2(c1.nc_s1);
        },
        set: function (value) {
            c1.nc_s1 = c1.nc_s2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.a_p2 = function (b) {
        return this.a_p1 + b;
    };
    Object.defineProperty(c1.prototype, "a_p3", {
        get: function () {
            return this.a_p2(this.a_p1);
        },
        set: function (value) {
            this.a_p1 = this.a_p2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.a_pp2 = function (b) {
        return this.a_p1 + b;
    };
    Object.defineProperty(c1.prototype, "a_pp3", {
        get: function () {
            return this.a_pp2(this.a_pp1);
        },
        set: function (value) {
            this.a_pp1 = this.a_pp2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.a_s2 = function (b) {
        return c1.a_s1 + b;
    };
    Object.defineProperty(c1, "a_s3", {
        get: function () {
            return c1.s2(c1.s1);
        },
        set: function (value) {
            c1.a_s1 = c1.a_s2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.b_p2 = function (b) {
        return this.b_p1 + b;
    };
    Object.defineProperty(c1.prototype, "b_p3", {
        get: function () {
            return this.b_p2(this.b_p1);
        },
        set: function (value) {
            this.b_p1 = this.b_p2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.prototype.b_pp2 = function (b) {
        return this.b_p1 + b;
    };
    Object.defineProperty(c1.prototype, "b_pp3", {
        get: function () {
            return this.b_pp2(this.b_pp1);
        },
        set: function (value) {
            this.b_pp1 = this.b_pp2(value);
        },
        enumerable: true,
        configurable: true
    });
    c1.b_s2 = function (b) {
        return c1.b_s1 + b;
    };
    Object.defineProperty(c1, "b_s3", {
        get: function () {
            return c1.s2(c1.s1);
        },
        set: function (value) {
            c1.b_s1 = c1.b_s2(value);
        },
        enumerable: true,
        configurable: true
    });
    return c1;
})();
var i1 = new c1();
var i1_p = i1.p1;
var i1_f = i1.p2;
var i1_r = i1.p2(20);
var i1_prop = i1.p3;
i1.p3 = i1_prop;
var i1_nc_p = i1.nc_p1;
var i1_ncf = i1.nc_p2;
var i1_ncr = i1.nc_p2(20);
var i1_ncprop = i1.nc_p3;
i1.nc_p3 = i1_ncprop;
var i1_s_p = c1.s1;
var i1_s_f = c1.s2;
var i1_s_r = c1.s2(20);
var i1_s_prop = c1.s3;
c1.s3 = i1_s_prop;
var i1_s_nc_p = c1.nc_s1;
var i1_s_ncf = c1.nc_s2;
var i1_s_ncr = c1.nc_s2(20);
var i1_s_ncprop = c1.nc_s3;
c1.nc_s3 = i1_s_ncprop;
var i1_c = c1;
var cProperties = (function () {
    function cProperties() {
    }
    Object.defineProperty(cProperties.prototype, "p1", {
        get: function () {
            return this.val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cProperties.prototype, "nc_p1", {
        get: function () {
            return this.val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cProperties.prototype, "p2", {
        set: function (value) {
            this.val = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(cProperties.prototype, "nc_p2", {
        set: function (value) {
            this.val = value;
        },
        enumerable: true,
        configurable: true
    });
    return cProperties;
})();
var cProperties_i = new cProperties();
cProperties_i.p2 = cProperties_i.p1;
cProperties_i.nc_p2 = cProperties_i.nc_p1;


//// [commentsClassMembers.d.ts]
declare class c1 {
    p1;
    p2(b);
    p3;
    private pp1;
    private pp2(b);
    private pp3;
    constructor ();
    static s1;
    static s2(b);
    static s3;
    nc_p1;
    nc_p2(b);
    nc_p3;
    private nc_pp1;
    private nc_pp2(b);
    private nc_pp3;
    static nc_s1;
    static nc_s2(b);
    static nc_s3;
    a_p1;
    a_p2(b);
    a_p3;
    private a_pp1;
    private a_pp2(b);
    private a_pp3;
    static a_s1;
    static a_s2(b);
    static a_s3;
    b_p1;
    b_p2(b);
    b_p3;
    private b_pp1;
    private b_pp2(b);
    private b_pp3;
    static b_s1;
    static b_s2(b);
    static b_s3;
}
declare var i1;
declare var i1_p;
declare var i1_f;
declare var i1_r;
declare var i1_prop;
declare var i1_nc_p;
declare var i1_ncf;
declare var i1_ncr;
declare var i1_ncprop;
declare var i1_s_p;
declare var i1_s_f;
declare var i1_s_r;
declare var i1_s_prop;
declare var i1_s_nc_p;
declare var i1_s_ncf;
declare var i1_s_ncr;
declare var i1_s_ncprop;
declare var i1_c;
declare class cProperties {
    private val;
    p1;
    nc_p1;
    p2;
    nc_p2;
}
declare var cProperties_i;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required :true
    },
    email :{
        type : String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true

    },
    phone :{
        type : String,
        default : "NOT GIVEN"
    },
    isBlocked :{
        type : Boolean,
        default : false

    },
    role : {
        type : String,
        default : "user"
    },
    isEmailVerified : {
        type : Boolean,
        default : false
    },
    Image : {
        type : String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAbFBMVEX///8AAADb29v5+fnw8PA/Pz9PT0+Kioq6urqlpaXi4uKrq6v29va2trbp6em/v79tbW0cHBydnZ0uLi7U1NQKCgpycnLMzMw5OTl5eXmVlZVfX18zMzMoKCjGxsZnZ2eCgoJXV1dGRkYTExMXMJP9AAAEzklEQVR4nO2bWXuqMBCGS1gF2QSVpSjK//+Pp20mEHtYQk0IF/NetqnPZzKZJTP9+EAQBEEQBEEQBEEQBEEQpZiWT77wLVO3EjGiuCrvjv2Fcy+rONKtZ5FbXaQGR1rUsW5Nc/inszHC+eTrVjaBFXyOCf4mCyzd6sbIkynB39xz3fr+Jxi1CY6DboW/OFa8Oru+lK1bXmqb/6l71K2S5+hyduuGBCzXIqHL2Xe7J4PmFAf+S/wwo4DTrEfdGL1VpO5YvKt6T+1uLm2CmCl6XMcXXB9shbetsil8dsnqyeAc1bCkIFsqm4QZ8n3mdlnMabd7yJRuAoo5zTvIOEw488+FI/cLsHf925zD7oVLCz1YOHFFNwQ2+SG80lGvaZ4I9k7AExBYqjvph9h2EcgfzJau1Z0fXVaECAg5iWpN80QOtU+hsiN6rFisjCtN1Eoxz0UtI9PrM0Ka2J/EVp+oZQRqNS1w+NHQLTplipfu4P5RyY3gUefNmjNRBD3qTLAWJdnP8kqtpgVAsmBK6e9HcrNul/UaBrXlVDCjvO3h+tF4fRZ0W0G3A8kx3TfBMtRddSaKILZARcKAysTWW/8d6xVeLqfRvdb8auSuSCghUW3VKlrkSmUUAnm7BY8HN/Wq5smEtxk2OVOvaQHIzs6LF/BIPZzm2PcNK/7KpYVQRmkv/T5YAFwMwyexZZvgP6mWdDZpDmneaTx30elhLYdmRrMHikVDu2r6vs6knr6Rct9S1wxm3xK5jMZiUrLf27tpl+QF01Qc/nMI0aH/Rp876qTdGqbKcKqXC+ZXTv+rRnvc48n5dlnhxnkUWVEeuwX3Y1v/m+cLxDEWcPbRc+CI3HROcOruIOr9xrPnJBee/tf7F0xSzemluPluXNyXw2i7ZcWG0ZU76O38QMpZK+ZJyz3cQb7j/sM5bWynvpTlpXbsJv0989Dqtg7zVrwIeiZVPyfwjUXCKnm+yC5uWi/iseKNOHM9MiLHJB4/4mCcXY1DDhYfP7Iwmtw+M/L403hq89G3QUS6HNvIg7ulmrKNYMiFaqGOlHcfvqKWVP8wbFooaJxWOGjWUAMO8zf1inLOHzZ68/fPXnG3crtOnSbNrPw0mtWjNzH703TTqR2f2fHnH9L2K/N36ZbRm4Wzv6XtQzmwWRw0odf+58dt9lpjJFslHOzqiTai/ifPtr2ChNniG9lvDH5jmyG03izeCmDspJItzJllFoIDDVO07x+VMCyPfDODZC/kGzzqB7J2h52W8htoPaWYxccwHaU8eQ7peYqOM8wBbUDVT84WuItWxodBoZuoraugzbc04CmGDzdZ7fMiPApd5HwaPJUrnR0/wr5Iilk+BH6VmQaMbTayPg9eHlU+7rcSQjUPOPnFNucbQEIkrXfnn1VHwIg65Yc0r2TRcY5OXTSB0ViJ9Tx0kwWnGf8A+H6JZWZ8lheZRqFtVJndO+gYKhtphkGih8TOOfyPjLJxI59WxjJrzCM9OGXzAzBhJtWLUk9fqAom10x+SkCTFmWtYhg9lDocRIdhOlVvXV4n2y0rd8yh9EiiXDKd5ZVb+ND/P1A2uUofXRypPtR0ZPvNV6LSthPJT1J+YtulwrEukxDp+3EkY81CBEEQBEEQBEEQBEEQBBHiH3FPL8/e7sPLAAAAAElFTkSuQmCC"
    }

})


const User = mongoose.model("users",userSchema)

export default User;
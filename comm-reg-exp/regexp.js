		// 验证帮助
		var verifyUtils = {

		    // 验证输入的内容是否是空
		    isNull: function(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /\S/;
		        if (!regex.test(str)) {
		            alert("文本框不能为空，请输入内容！");
		        }

		    },

		    // 验证输入的字符是否是英文字母
		    isLetter: function(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^[a-zA-Z]+$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的英文字母!");
		        }

		        //  验证日期格式是否为YYYY-MM-DD格式
		    },
		    isDate: function(idStr) {

		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
		        var r = str.match(regex); // 使用match方法获取指定字符串的值

		        if (r == null) {
		            alert("请输入正确的日期格式!");
		        }

		        //  验证日期格式是否为YYYY-MM-DD hh:mm:ss格式
		    },
		    isDateTime: function(idStr) {

		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
		        var r = str.match(regex); // 使用match方法获取指定字符串的值

		        if (r == null) {
		            alert("请输入正确的日期格式!");
		        }

		        // 验证整数
		    },
		    isInteger: function(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^[-+]?\d*$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的整数!");
		        }

		        // 验证双精度
		    },
		    isDouble: function(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^[-\+]?\d+(\.\d+)?$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的小数!");
		        }

		        // 验证中文
		    },
		    isChinese(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^[\u0391-\uFFE5]+$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的中文!");
		        }

		        // 验证邮箱
		    },
		    isEmail(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的邮箱格式!");
		        }

		        // 验证手机号
		    },
		    isPhone(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^1[3456789]\d{9}$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的手机号!");
		        }

		        // 验证身份证
		    },
		    isIdCard(idStr) {
		        var str = document.getElementById(idStr).value.trim();
		        var regex = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/;
		        if (!regex.test(str)) {
		            alert("请输入正确的身份证号码!");
		        }
		    }
		};

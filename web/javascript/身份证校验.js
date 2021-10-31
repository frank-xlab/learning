


        function IdCardValidate(idCard) {

            var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // ��Ȩ����
            var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // ���֤��֤λֵ.10����X

            function isTrueValidateCodeBy18IdCard(a_idCard) {
                var sum = 0; // ������Ȩ��ͱ���
                if (a_idCard[17].toLowerCase() == 'x') {
                    a_idCard[17] = 10; // �����λΪx����֤���滻Ϊ10�����������
                }
                for (var i = 0; i < 17; i++) {
                    sum += Wi[i] * a_idCard[i]; // ��Ȩ���
                }
                valCodePosition = sum % 11; // �õ���֤����λ��
                if (a_idCard[17] == ValideCode[valCodePosition]) {
                    return true;
                } else {
                    return false;
                }
            }

            function isValidityBrithBy18IdCard(idCard18) {
                var year = idCard18.substring(6, 10);
                var month = idCard18.substring(10, 12);
                var day = idCard18.substring(12, 14);
                var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
                // ������getFullYear()��ȡ��ݣ�����ǧ�������
                if (temp_date.getFullYear() != parseFloat(year)
                      || temp_date.getMonth() != parseFloat(month) - 1
                      || temp_date.getDate() != parseFloat(day)) {
                    return false;
                } else {
                    return true;
                }
            }

            function isValidityBrithBy15IdCard(idCard15) {
                var year = idCard15.substring(6, 8);
                var month = idCard15.substring(8, 10);
                var day = idCard15.substring(10, 12);
                var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
                // ���������֤�е����������迼��ǧ��������ʹ��getYear()����
                if (temp_date.getYear() != parseFloat(year)
                          || temp_date.getMonth() != parseFloat(month) - 1
                          || temp_date.getDate() != parseFloat(day)) {
                    return false;
                } else {
                    return true;
                }
            }
            //ȥ���ַ���ͷβ�ո�
            function trim(str) {
                return str.replace(/(^\s*)|(\s*$)/g, "");
            }

            idCard = trim(idCard.replace(/ /g, ""));
            if (idCard.length == 15) {
                return isValidityBrithBy15IdCard(idCard);
            } else if (idCard.length == 18) {
                var a_idCard = idCard.split(""); // �õ����֤����
                if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }

        }
			
Keep your dream alive, because it might come true one day.

���� KPI ������飬���Զ�˵���䣬������˵����Ŀ�ꡣÿ���˶���Ҫ��������ɣ�������һ����֯�У�������ɾͱ�����б߽�Ļ�����û�б߽磬��Ҿ��β��ɺ���������������ˣ�Ҳ��ʧȥŬ���ķ������ԣ������Ŷ������ر�ǿ��ÿ����ÿ������ /�µ����ȼ����飬����һ���ǿ��������ġ�������ϲ����ϲ�����������Ҫ��ҹ�ͬ���صĹ���



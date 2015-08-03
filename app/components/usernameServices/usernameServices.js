'use strict';

angular.module('myApp.usernameServices', [])
    .factory('UsernameService', ['lodash', function (lodash) {
        var possibleEndings = [
            '', 'dur', 'san', 'go', 'us', 'o', 'dra', 'an'
        ]

        var lcSyllabs = [
            'V', 'CV', 'VC', 'CVC', 'CCV', 'CCCV', 'CVCC'
        ]

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        var vowel = "aeiouy".split("");

        var lcIsVowel = function (pChar) {
            var lcReturn = false;
            lodash.each(vowel, function (pItem) {
                if (pItem == pChar) {
                    lcReturn = true;
                    return false;
                }
            })
            return lcReturn;
        }

        var lcIsLastVowel = function (pName) {
            var lcReturn = false;
            if (pName.length > 0) {
                lcReturn = lcIsVowel(pName.charAt(pName.length - 1));
            }
            return lcReturn;
        }

        var lcGetNewChar = function (pName) {
            var lcChar = alphabet[randomIntFromInterval(0, alphabet.length - 1)];


            if (pName.length > 0) {
                var lcLastChar = pName.charAt(pName.length - 1);
                if (lcChar == lcLastChar && !lcIsLastVowel(pName)) {
                    lcChar = lcGetNewChar(pName);
                } else if (lcChar == lcLastChar && lcIsLastVowel(pName)) {
                    if (pName.length > 1) {
                        var lcLastTwoCharsTheSame = pName.charAt(pName.length - 1) == pName.charAt(pName.length - 2);
                        if (lcLastTwoCharsTheSame) {
                            lcChar = lcGetNewChar(pName);
                        }
                    }
                }
            }
            return lcChar;
        }

        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }


        // Statt Random, eher nach dem Muster CVC oder CVVC und hierbei dann 1-2 durchführen
        var lcGen = function () {
            var lcNameLength = randomIntFromInterval(4, 10);
            var lcName = '';
            for (var i = 0; i < lcNameLength; i++) {
                var lcNewChar = lcGetNewChar(lcName);
                lcName += lcNewChar;
            }
            return capitalizeFirstLetter(lcName);
        }

        var lcGetNewChar = function (pVowel) {
            var lcChar = alphabet[randomIntFromInterval(0, alphabet.length - 1)];
            if (pVowel && !lcIsVowel(lcChar)) {
                lcChar = lcGetNewChar(pVowel);
            } else if (!pVowel && lcIsVowel(lcChar)) {
                lcChar = lcGetNewChar(pVowel);
            }

            return lcChar;
        }

        var lcGetSyllab = function () {
            var lcReturn = '';
            lcReturn += lcGetNewChar(false);
            lcReturn += lcGetNewChar(true);
            if (randomIntFromInterval(1, 4) == 1) {
                lcReturn += lcGetNewChar(true);
            }
            //if (randomIntFromInterval(1, 2) == 1) {
                lcReturn += lcGetNewChar(false);
            //}
            return lcReturn;
        }

        var lcGen2 = function () {
            var lcNameLength = randomIntFromInterval(2, 3);
            var lcReturn = '';
            for (var i=0;i<lcNameLength;i++) {
                lcReturn += lcGetSyllab()
            }
            return capitalizeFirstLetter(lcReturn);
        }


        return {
            generateUsernames: function (pCount) {
                pCount = pCount || 1;
                var lcReturn = [];
                for (var i = 0; i < pCount; i++) {
                    lcReturn.push(lcGen2());
                }
                lcReturn = lodash.sortBy(lcReturn);

                return lcReturn;
            }
        }
    }]);

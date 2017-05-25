/******************************************************************************

Filename: unitData.js
Purpose: This file contains Classes to assist in 
         learning JavaScript Looping.
******************************************************************************/

/*
    This is the Student Exam Records Class for Example 5.2
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var studenRecords = openStudentExamRecords();
    
    Then you need to start a loop and test the readNextRecord() method. In the
    loop you need to call the individual methods for fields
    
        while (studenRecords.readNextRecord()) {
            ...
        }
        
    Inside the loop the data for each row is retrieved with these methods:
    
        studenRecords.getStudentName();
        studenRecords.getStudentScore();
        
    These methods return data for the current record.
*/
function StudentExamRecords() {
    this.studentExamScoresData =  [
        ["Joe Coyne", 55],
        ["Fred Hensen", 72],
        ["Greg Statz", 89],
        ["Mark Stanley", 65.5],
        ["Dan Bristol", 99],
        ["Glen Doran", 45],
        ["Karen Mack", 76.9],
        ["Dawn Tillman", 68],
        ["Ed O'Connor", 86],
        ["Hugo Matson", 85],
        ["Brian Smith", 91],
        ["Nancy Hagman", 90],
        ["Jack Darrow", 78.5],
        ["Frank Marco", 23],
        ["Barry Thorpe", 74],
        ["Connie Hunter", 69],
        ["Jay Meyer", 89],
        ["John Reyes", 64],
        ["Fred Balmer", 72],
        ["Donna Gorman", 83],
        ["Jane Linderman", 67.9],
        ["Seth Olson", 100],
        ["Carrie Ramirez", 80]
    ];
    
    this.position = -1;
}

StudentExamRecords.prototype.getStudentName = function () {
    return this.studentExamScoresData[this.position][0];
};

StudentExamRecords.prototype.getStudentScore = function () {
    return this.studentExamScoresData[this.position][1];
};

StudentExamRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.studentExamScoresData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

function openStudentExamRecords() {
    return new StudentExamRecords();
}

/*****************************************************************************/


/*
    This is the Student Enrollment Records Class for example 5.3
    
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var studenRecords = openStudentEnrollmentRecords();
    
        Then you need to start a loop and test the readNextRecord() method. In the
        loop you need to call the individual methods for fields

            while (studenRecords.readNextRecord()) {
                ...
            }

        Inside the loop the data for each row is retrieved with these methods:
    
        studentRecords.getStudentNumber();
        studentRecords.getStudentName();
        studentRecords.getStudentAddress();
        studentRecords.getStudentZipCode();
        studentRecords.getStudentGender();
        studentRecords.getFacultyStudentStatus();
        studentRecords.getStudentAttendance();
        studentRecords.getStudentAge();  
        studentRecords.getStudentCourseNumber();
        
    These methods return data for the current record.
*/
function StudentEnrollmentsRecords() {
    this.studentEnrollmentData = [
        [101, "Joe Coyne", "123 Some St.", 53712, "M", "S", "FT", 20, 18520],
        [102, "Fred Hensen", "2205 Grand St.", 53712, "M", "F", "", 20, 18500],
        [103, "Ethel Roselle", "190 Fox St.", 53713, "F", "S", "PT", 25, 18530],
        [104, "Barney Curry", "1600 Ash St.", 53714, "M", "S", "FT", 24, 18520],
        [105, "Wilma Hilgart", "2205 Grand St.", 53712, "F", "S", "PT", 18, 18540],
        [106, "Greg Statz", "190 Fox St.", 53713, "M", "S", "FT", 22, 18500],
        [107, "Mark Stanley", "2205 Grand St.", 53712, "M", "F", "", 23, 18500],
        [108, "Sandy Flynn", "1600 Ash St.", 53714, "F", "S", "PT", 24, 18530],
        [109, "Chris Foley", "190 Fox St.", 53713, "M", "S", "FT", 26, 18520],
        [110, "Dan Bristol", "123 Some St.", 53716, "M", "S", "PT", 19, 18500],
        [111, "Don Buell", "190 Fox St.", 53713, "M", "S", "FT", 26, 18540],
        [112, "Glen Doran", "2205 Grand St.", 53712, "M", "F", "", 22, 18500],
        [113, "Bill Gardiner", "123 Some St.", 53711, "M", "S", "PT", 25, 18520],
        [114, "Karen Mack", "190 Fox St.", 53713, "F", "S", "PT", 18, 18500],
        [115, "Dianne Klein", "2205 Grand St.", 53712, "F", "S", "PT", 18, 18530],
        [116, "Dawn Tillman", "1600 Ash St.", 53714, "F", "S", "FT", 19, 18500],
        [117, "Ed O'Connor", "190 Fox St.", 53713, "M", "S", "FT", 18, 18500],
        [118, "Hugo Matson", "2205 Grand St.", 53712, "M", "F", "", 25, 18500],
        [119, "Dave Koch", "1600 Ash St.", 53714, "M", "S", "PT", 24, 18540],
        [120, "Mike Smith", "190 Fox St.", 53713, "M", "S", "FT", 24, 18520],
        [121, "Alan Smith", "123 Some St.", 53711, "M", "F", "", 19, 18530],
        [122, "Brian Smith", "190 Fox St.", 53713, "M", "S", "FT", 19, 18500],
        [123, "Nancy Hagman", "2205 Grand St.", 53712, "M", "S", "PT", 23, 18500],
        [124, "Andre Dillard", "1600 Ash St.", 53714, "M", "S", "FT", 23, 18520],
        [125, "Jack Darrow", "190 Fox St.", 53713, "M", "S", "FT", 22, 18500],
        [126, "Vicki Berg", "2205 Grand St.", 53712, "F", "S", "PT", 25, 18540],
        [127, "Frank Marco", "123 Some St.", 53712, "M", "S", "FT", 26, 18520],
        [128, "Brenda Smithson", "123 Some St.", 53711, "F", "S", "PT", 20, 18530],
        [129, "Barry Thorpe", "2205 Grand St.", 53712, "M", "F", "", 24, 18500],
        [130, "Sheri Lytle", "1600 Ash St.", 53714, "F", "S", "PT", 21, 18520],
        [131, "Connie Hunter", "1600 Ash St.", 53714, "F", "S", "FT", 18, 18500],
        [132, "Jim Cramer", "2205 Grand St.", 53712, "M", "S", "FT", 18, 18540],
        [133, "Craig Kim", "190 Fox St.", 53713, "M", "S", "FT", 25, 18530],
        [134, "Jay Meyer", "1600 Ash St.", 53714, "M", "S", "PT", 23, 18500],
        [135, "John Reyes", "2205 Grand St.", 53712, "M", "F", "", 25, 18500],
        [136, "Curtis Strand", "190 Fox St.", 53713, "M", "S", "FT", 25, 18520],
        [137, "Fred Balmer", "123 Some St.", 53712, "M", "S", "FT", 25, 18520],
        [138, "Donna Gorman", "2205 Grand St.", 53712, "M", "S", "PT", 26, 18500],
        [139, "Janice Hall", "190 Fox St.", 53713, "F", "S", "PT", 23, 18530],
        [140, "Jennifer Houseman", "1600 Ash St.", 53714, "F", "S", "PT", 24, 18540],
        [141, "Jane Linderman", "2205 Grand St.", 53712, "M", "S", "PT", 26, 18500],
        [142, "Sheila Moore", "123 Some St.", 53711, "F", "S", "PT", 18, 18520],
        [143, "Seth Olson", "190 Fox St.", 53713, "M", "S", "FT", 23, 18500],
        [144, "Kathy Roberts", "2205 Grand St.", 53712, "F", "S", "PT", 21, 18530],
        [145, "Laura Johnson", "1600 Ash St.", 53714, "F", "S", "PT", 23, 18520],
        [146, "Sharon Lee", "2205 Grand St.", 53712, "F", "S", "PT", 22, 18540],
        [147, "Jeff Sager", "2205 Grand St.", 53712, "M", "S", "PT", 20, 18530],
        [148, "Steve Stone", "2205 Grand St.", 53712, "M", "S", "PT", 23, 18520],
        [149, "Nick Mathis", "190 Fox St.", 53713, "M", "S", "FT", 25, 18530],
        [150, "Carrie Ramirez", "2205 Grand St.", 53712, "M", "S", "PT", 21, 18500]
    ];
    
    this.position = -1;
}

StudentEnrollmentsRecords.prototype.getStudentAsArray = function () {
    return this.studentEnrollmentData[this.position];
};

StudentEnrollmentsRecords.prototype.getStudentNumber = function () {
    return this.studentEnrollmentData[this.position][0];
};

StudentEnrollmentsRecords.prototype.getStudentName = function () {
    return this.studentEnrollmentData[this.position][1];
};

StudentEnrollmentsRecords.prototype.getStudentAddress = function () {
    return this.studentEnrollmentData[this.position][2];
};

StudentEnrollmentsRecords.prototype.getStudentZipCode = function () {
    return this.studentEnrollmentData[this.position][3];
};

StudentEnrollmentsRecords.prototype.getStudentGender = function () {
    return this.studentEnrollmentData[this.position][4];
};

StudentEnrollmentsRecords.prototype.getFacultyStudentStatus = function () {
    return this.studentEnrollmentData[this.position][5];
};

StudentEnrollmentsRecords.prototype.getStudentAttendance = function () {
    return this.studentEnrollmentData[this.position][6];
};

StudentEnrollmentsRecords.prototype.getStudentAge = function () {
    return this.studentEnrollmentData[this.position][7];
};

StudentEnrollmentsRecords.prototype.getStudentCourseNumber = function () {
    return this.studentEnrollmentData[this.position][8];
};

StudentEnrollmentsRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.studentEnrollmentData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

StudentEnrollmentsRecords.prototype.sortByClassNumberGender = function (studentArray) {
    return studentArray.sort(function (studentArrayA, studentArrayB) {
        if (studentArrayA[8] < studentArrayB[8]) {
            return -1;
        } else if (studentArrayA[8] > studentArrayB[8]) {
            return 1;
        } else if (studentArrayA[8] === studentArrayB[8]){
            if (studentArrayA[4] < studentArrayB[4]) {
                return -1;
            } else if (studentArrayA[4] > studentArrayB[4]){
                return 1;
            } else {
                return 0;
            }
        }
    });
    
};


function openStudentEnrollmentRecords() {
    return new StudentEnrollmentsRecords();
}


/*****************************************************************************/


/*
    This is the Inventory Items Records Class for Example 5.4
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var inventoryItems = openIventoryItemsRecords();
    
    Then you need to start a loop and test the readNextRecord() method. In the
    loop you need to call the individual methods for fields

        while (studenRecords.readNextRecord()) {
            ...
        }
        
    Inside the loop the data for each row is retrieved with these methods:
    
        inventoryItems.getItemNumber();
        inventoryItems.getItemDescription();
        inventoryItems.getItemStockAmount();
                
    These methods return data for the current record.
*/
function InventoryItemsRecords() {
    this.inventoryItemsData =  [
        [200, "Widgets", 25],
        [201, "Gadgets", 17],
        [202, "Dodads", 30],
        [203, "Toggles", 12],
        [204, "Doilies", 25],
        [205, "FooBars", 1],
        [206, "Fidgets", 20],
        [207, "Fiddles", 19],
        [208, "Faddles", 10],
        [209, "Frills", 9],
	    [210, "WhatchCallIts", 77],
	    [211, "Things", 3],
	    [212, "Gizmos", 112],
		[213, "Jammers", 100],
	    [214, "Extenders", 133],
	    [215, "Fillers", 89],
		[216, "RoundToIts", 47]
		
    ];
    
    this.position = -1;
}

InventoryItemsRecords.prototype.getItemNumber = function () {
    return this.inventoryItemsData[this.position][0];
};

InventoryItemsRecords.prototype.getItemDescription = function () {
    return this.inventoryItemsData[this.position][1];
};

InventoryItemsRecords.prototype.getItemStockAmount = function () {
    return this.inventoryItemsData[this.position][2];
};

InventoryItemsRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.inventoryItemsData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

function openInventoryItemsRecords() {
    return new InventoryItemsRecords();
}

/*****************************************************************************/

/*
    This is the Employee Payroll Records Class
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var records = openEmployeePayrollRecords();
    
    Then you need to start a loop and test the readNextRecord() method. In the
    loop you need to call the individual methods for fields
    
        while (studenRecords.readNextRecord()) {
            ...
        }
        
    Inside the loop the data for each row is retrieved with these methods:
    
        records.getEmployeeNumber();
        records.getEmployeeName();
        records.getEmployeeHourlyWage();
        records.getEmployeeHoursWorked();
                
    These methods return data for the current record.
*/

function EmployeePayrollRecords() {
    this.employeePayrollData = [
        [101, "Joe Coyne", 15, 37.5],
        [102, "Fred Hensen", 20, 33],
        [103, "Ethel Roselle", 25, 45],
        [104, "Barney Curry", 30, 35],
        [105, "Wilma Hilgart", 20, 40],
        [106, "Greg Statz", 25, 45],
        [107, "Mark Stanley", 20, 40],
        [108, "Sandy Flynn", 30, 35],
        [109, "Chris Foley", 25, 45],
        [110, "Dan Bristol", 15, 32],
        [111, "Don Buell", 25, 45],
        [112, "Glen Doran", 20, 40],
        [113, "Bill Gardiner", 15, 37.5],
        [114, "Karen Mack", 25, 45],
        [115, "Dianne Klein", 20, 40],
        [116, "Dawn Tillman", 30, 35],
        [117, "Ed O'Connor", 25, 45],
        [118, "Hugo Matson", 20, 40],
        [119, "Dave Koch", 30, 35],
        [120, "Mike Smith", 25, 45],
        [121, "Alan Smith", 15, 37.5],
        [122, "Brian Smith", 25, 45],
        [123, "Nancy Hagman", 20, 40],
        [124, "Andre Dillard", 30, 20],
        [125, "Jack Darrow", 25, 45],
        [126, "Vicki Berg", 20, 40],
        [127, "Frank Marco", 15, 37.5],
        [128, "Brenda Smithson", 15, 37.5],
        [129, "Barry Thorpe", 20, 40],
        [130, "Sheri Lytle", 30, 35],
        [131, "Connie Hunter", 30, 35],
        [132, "Jim Cramer", 20, 25],
        [133, "Craig Kim", 25, 45],
        [134, "Jay Meyer", 30, 35]        
    ];
    
    this.position = -1;
}

EmployeePayrollRecords.prototype.getEmployeeNumber = function () {
    return this.employeePayrollData[this.position][0];
};

EmployeePayrollRecords.prototype.getEmployeeName = function () {
    return this.employeePayrollData[this.position][1];
};

EmployeePayrollRecords.prototype.getEmployeeHourlyWage = function () {
    return this.employeePayrollData[this.position][2];
};

EmployeePayrollRecords.prototype.getEmployeeHoursWorked = function () {
    return this.employeePayrollData[this.position][3];
};

function openEmployeePayrollRecords() {
    return new EmployeePayrollRecords();
}

EmployeePayrollRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.employeePayrollData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

/*****************************************************************************/

/*
    This is the Customer Gas Usage Class
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var records = openCustomerGasUsageRecords();
    
    Then you need to start a loop and test the readNextRecord() method. In the
    loop you need to call the individual methods for fields
    
        while (studenRecords.readNextRecord()) {
            ...
        }
        
    Inside the loop the data for each row is retrieved with these methods:
    
        records.getCustomerNumber();
        records.getCustomerName();
        records.getCustomerAddress();
        records.getCustomerGasUsage();
                
    These methods return data for the current record.
*/

function CustomerGasUsageRecords() {
    this.customerGasUsageData = [
        [101, "Joe Coyne", "123 Some St.", 60],
        [102, "Fred Hensen", "2205 Grand St.", 34],
        [103, "Ethel Roselle", "190 Fox St.", 56],
        [104, "Barney Curry", "1600 Ash St.", 78],
        [105, "Wilma Hilgart", "2205 Grand St.", 33],
        [106, "Greg Statz", "190 Fox St.", 61],
        [107, "Mark Stanley", "2205 Grand St.", 59.9],
        [108, "Sandy Flynn", "1600 Ash St.", 56],
        [109, "Chris Foley", "190 Fox St.", 22.2],
        [110, "Dan Bristol", "123 Some St.", 111],
        [111, "Don Buell", "190 Fox St.", 60.1],
        [112, "Glen Doran", "2205 Grand St.", 77.3],
        [113, "Bill Gardiner", "123 Some St.", 120],
        [114, "Karen Mack", "190 Fox St.", 76.8],
        [115, "Dianne Klein", "2205 Grand St.", 34],
        [116, "Dawn Tillman", "1600 Ash St.", 60],
        [117, "Ed O'Connor", "190 Fox St.", 31.1],
        [118, "Hugo Matson", "2205 Grand St.", 23.6],
        [119, "Dave Koch", "1600 Ash St.", 123],
        [120, "Mike Smith", "190 Fox St.", 82]
    ];
    
    this.position = -1;
}

CustomerGasUsageRecords.prototype.getCustomerNumber = function () {
    return this.customerGasUsageData[this.position][0];
};

CustomerGasUsageRecords.prototype.getCustomerName = function () {
    return this.customerGasUsageData[this.position][1];
};

CustomerGasUsageRecords.prototype.getCustomerAddress = function () {
    return this.customerGasUsageData[this.position][2];
};

CustomerGasUsageRecords.prototype.getCustomerGasUsage = function () {
    return this.customerGasUsageData[this.position][3];
};

CustomerGasUsageRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.customerGasUsageData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

function openCustomerGasUsageRecords() {
    return new CustomerGasUsageRecords();
}


/*****************************************************************************/

/*
    This is the Zip Code Study Record Set
    Usage:
    
    The records are made available to lab scripts with this function.
    
        var records = openZipCodeStudyRecordSet();
    
    Then you need to start a loop and test the readNextRecord() method. In the
    loop you need to call the individual methods for fields
    
        while (studenRecords.readNextRecord()) {
            ...
        }
        
    Inside the loop the data for each row is retrieved with these methods:
    
        records.getSampleFirstName();
        records.getSampleLastName();
        records.getSampleGender();
        records.getSampleZipCode();
                
    These methods return data for the current record.
*/

function ZipCodeStudyRecords() {
    this.zipCodeStudyData = [
        ["Toby", "Mainville", "M", 75213],
        ["Aubrey", "Hannagan", "M", 91343],
        ["Chelsie", "Lustig", "F", 10024],
        ["Renetta", "Point", "F", 10024],
        ["Roscoe", "Oldaker", "F", 75215],
        ["Toby", "Lehtinen", "M", 10021],
        ["Candice", "Stapleton", "F", 55414],
        ["Winston", "Betzen", "M", 55411],
        ["Torrie", "Kratzer", "F", 75214],
        ["Elijah", "Fockler", "M", 10023],
        ["Randal", "Phillipson", "M", 91342],
        ["Lasandra", "Becker", "F", 55410],
        ["Darrin", "Wilhelmsen", "M", 10020],
        ["Emmett", "Reinders", "M", 91341],
        ["Christoper", "Dansereau", "F", 91341],
        ["Clotilde", "Furlow", "F", 55414],
        ["Tomika", "Frakes", "F", 91343],
        ["Caterina", "Krach", "F", 91344],
        ["Ozella", "Macmullen", "F", 75214],
        ["Chance", "Straight", "F", 75214],
        ["Hannelore", "Cornette", "F", 55411],
        ["Jacquelynn", "Lecroy", "F", 75211],
        ["Galen", "Reyer", "F", 55414],
        ["Meggan", "Eliassen", "F", 55413],
        ["Wilfred", "Sokolowski", "F", 10021],
        ["Timmy", "Gustovich", "M", 10021],
        ["Alisha", "Finnie", "F", 55413],
        ["Erminia", "Kranzler", "F", 10024],
        ["Renetta", "Valesquez", "F", 10022],
        ["Emmett", "Drabek", "M", 55410],
        ["Herschel", "Godin", "F", 75215],
        ["Meggan", "Soundara", "F", 75215],
        ["Brendan", "Merow", "M", 10022],
        ["Wei", "Tatar", "F", 10021],
        ["Tommie", "Debrock", "M", 75215],
        ["Caryn", "Lawing", "F", 55412],
        ["Jan", "Pletsch", "M", 91340],
        ["Randal", "Anglemyer", "M", 10021],
        ["Bennett", "Pedersen", "F", 10021],
        ["Marceline", "Sobie", "F", 10020],
        ["Maryrose", "Holgate", "F", 91341],
        ["Missy", "Seim", "F", 91344],
        ["Rasheeda", "Habicht", "F", 91342],
        ["Manuel", "Kimzey", "F", 91343],
        ["Bobbie", "Kerwin", "F", 75211],
        ["Elois", "Skeete", "F", 10024],
        ["Kellie", "Blane", "F", 10024],
        ["Carl", "Watterson", "F", 55412],
        ["Micheal", "Conrad", "F", 91340],
        ["Aubrey", "Deitrick", "M", 75213],
        ["Charley", "Fike", "F", 91340],
        ["Brendan", "Storr", "M", 75213],
        ["Austin", "Mccormick", "F", 55412],
        ["Chandra", "Archuleta", "F", 55413],
        ["Marlen", "Ahlm", "F", 91340],
        ["Annett", "Shiring", "F", 91340],
        ["Fe", "Torborg", "F", 75211],
        ["Cris", "Turnbull", "F", 91340],
        ["Fae", "Clint", "F", 75213],
        ["Elias", "Tripp", "F", 91344],
        ["Boyd", "Lober", "M", 91341],
        ["Winston", "Breitling", "M", 55413],
        ["Devorah", "Wakely", "F", 55414],
        ["Mana", "Jungels", "F", 75213],
        ["Lindsay", "Artz", "F", 55410],
        ["Angela", "Luman", "F", 75214],
        ["Betsey", "Lasenby", "F", 55413],
        ["Toby", "Carnett", "M", 10023],
        ["Mervin", "Durand", "F", 10023],
        ["Marlon", "Feldkamp", "M", 10022],
        ["Randal", "Dux", "M", 10023],
        ["Betsey", "Bulinski", "F", 10022],
        ["Marilu", "Recchia", "F", 10022],
        ["Ernie", "Krajewski", "F", 10022],
        ["Timmy", "Woodhams", "M", 10020],
        ["Johnie", "Delima", "F", 10022],
        ["Damian", "Buda", "F", 91342],
        ["Lee", "Dumas", "F", 55413],
        ["Timmy", "Thuss", "M", 75214],
        ["Tamika", "Nicoll", "F", 75213],
        ["Venus", "Cullens", "F", 91342],
        ["Alexis", "Alvarado", "F", 10024],
        ["Leroy", "Shingleton", "F", 10023],
        ["Emmett", "Rehfeld", "M", 55413],
        ["Alishia", "Achee", "F", 55412],
        ["Librada", "Glassey", "F", 91343],
        ["Lanny", "Grell", "F", 75214],
        ["Ariane", "Moura", "F", 55410],
        ["Darnell", "Trethewey", "M", 75211],
        ["Edwardo", "Aguon", "F", 55412],
        ["Wilbur", "Delatte", "F", 75213],
        ["Shella", "Gaertner", "F", 10022],
        ["Tommy", "Ayers", "F", 75212],
        ["Jeanie", "Starkey", "F", 10021],
        ["Marlon", "Taal", "M", 91343],
        ["Christoper", "Mcneilly", "F", 75215],
        ["Jeniffer", "Beckham", "F", 10023],
        ["Carry", "Drucker", "F", 10022],
        ["Darnell", "Viniard", "M", 75212],
        ["Wonda", "Legros", "F", 55411],
        ["Aubrey", "Mollet", "M", 10023],
        ["Carson", "Barrick", "F", 91340],
        ["Maximo", "Shew", "F", 75215],
        ["Shakita", "Zapata", "F", 75211],
        ["Libbie", "Boring", "F", 75213],
        ["Coretta", "Vines", "F", 91342],
        ["Lowell", "Gilham", "F", 75212],
        ["Alec", "Sheetz", "F", 91342],
        ["Jefferson", "Bratton", "F", 55410],
        ["Clarence", "Alarcon", "F", 55412],
        ["Benito", "Junkins", "F", 10024],
        ["Katrice", "Ballew", "F", 75214],
        ["Hollis", "Mccormack", "F", 10024],
        ["Jan", "Hershkowitz", "M", 75211],
        ["Kimiko", "Lujano", "F", 55410],
        ["Breann", "Stagner", "F", 10020],
        ["Courtney", "Sivertson", "M", 55413],
        ["Carey", "Brass", "F", 55412],
        ["Eliseo", "Eyre", "F", 10020],
        ["Anthony", "Tullis", "F", 75215],
        ["Elias", "Pugliese", "F", 91343],
        ["Don", "Maggi", "F", 75213],
        ["Francoise", "Loven", "F", 91344],
        ["Temeka", "Blaustein", "F", 55410],
        ["Azzie", "Fricks", "F", 91340],
        ["Tequila", "Mairs", "F", 55413],
        ["Jerrold", "Alleyne", "F", 91340],
        ["Marnie", "Wight", "F", 75212],
        ["Della", "Baum", "F", 10023],
        ["Lindsay", "Bisbee", "F", 91343],
        ["Zane", "Mcgrail", "F", 91340],
        ["Don", "Jone", "F", 10023],
        ["Jamie", "Rodas", "F", 55412],
        ["Gwyn", "Stieber", "F", 10023],
        ["Marlon", "Dalgleish", "M", 91340],
        ["Abel", "Shamp", "M", 10022],
        ["Susanne", "Poffenberger", "F", 10023],
        ["Deloris", "Deford", "F", 10021],
        ["Santos", "Kolek", "M", 91344],
        ["Minta", "Mcdevitt", "F", 75213],
        ["Dominick", "Boyack", "M", 10020],
        ["Lewis", "Pinon", "F", 91342],
        ["Arline", "Niemann", "F", 91341],
        ["Courtney", "Schrenk", "M", 10024],
        ["Lorna", "Hunley", "F", 91340],
        ["Cedric", "Lauderdale", "F", 91341],
        ["Kit", "Cutshall", "F", 75211],
        ["Whitney", "Comstock", "F", 75214],
        ["Loriann", "Ogata", "F", 75211],
        ["Roman", "Goetsch", "F", 75214],
        ["Boyd", "Dingson", "M", 91340],
        ["Tommie", "Peppe", "M", 91340],
        ["Boyd", "Nauyen", "M", 10021],
        ["Elizabet", "Espitia", "F", 91342],
        ["Artie", "Denison", "F", 75212],
        ["Geoffrey", "Eddings", "F", 55412],
        ["Santos", "Schonberger", "M", 10024],
        ["Cyrus", "Warman", "F", 10022],
        ["Eusebio", "Alvarenga", "F", 55414],
        ["Cary", "Adebisi", "M", 55411],
        ["Winston", "Seidlitz", "M", 55414],
        ["Omega", "Levandoski", "F", 10021],
        ["Reiko", "Velis", "F", 10021],
        ["Jeromy", "Palombo", "F", 55411],
        ["Ronny", "Chester", "F", 75212],
        ["Harley", "Schwindt", "F", 10020],
        ["Jerald", "Pawlicki", "M", 91342],
        ["Luanne", "Diana", "F", 75215],
        ["Annett", "Rodregez", "F", 55412],
        ["Ariane", "Monserrate", "F", 91342],
        ["Latashia", "Laboe", "F", 55412],
        ["Lucius", "Espey", "F", 91341],
        ["Hailey", "Muff", "F", 75215],
        ["Mitch", "Heinrich", "F", 55412],
        ["Scottie", "Shaw", "F", 55410],
        ["Ismael", "Bartsch", "F", 10024],
        ["Leonel", "Custard", "F", 91343],
        ["Jen", "Tamondong", "F", 91344],
        ["Myrta", "Herrin", "F", 75213],
        ["Shayna", "Hersey", "F", 91340],
        ["Adriene", "Minks", "F", 55412],
        ["Emmett", "Bohlander", "M", 75215],
        ["Tinisha", "Sharon", "F", 75212],
        ["Cruz", "Filkins", "F", 91340],
        ["Sherika", "Chapell", "F", 91340],
        ["Jacquiline", "Gunnarson", "F", 55413],
        ["Darius", "Hisle", "F", 91343],
        ["September", "Lyall", "F", 75215],
        ["Shery", "Kvamme", "F", 91344],
        ["Rachelle", "Christie", "F", 10020],
        ["Alanna", "Hugh", "F", 55410],
        ["Grant", "Willits", "F", 55414],
        ["Randal", "Lein", "M", 75212],
        ["Tamiko", "Lingo", "F", 75212],
        ["Erminia", "Rufo", "F", 55412],
        ["Elijah", "Cowdery", "M", 91341],
        ["Damian", "Lorusso", "F", 10021],
        ["Trinidad", "Brian", "F", 10023],
        ["Santos", "Scordino", "M", 10024],
        ["Genia", "Truex", "F", 75214],
        ["Gary", "Braley", "F", 91343],
        ["Mirtha", "Millstein", "F", 91341],
        ["Olimpia", "Doak", "F", 75214],
        ["Willis", "Gallaher", "F", 10020],
        ["Toshiko", "Abdelhamid", "F", 91342],
        ["Librada", "Arriaza", "F", 75212],
        ["Archie", "Billman", "F", 91344],
        ["Morris", "Favorite", "F", 75211],
        ["Jeanmarie", "Gerst", "F", 75215],
        ["Theola", "Yaney", "F", 75211],
        ["Pat", "Dunphy", "F", 75214],
        ["Jake", "Good", "F", 91344],
        ["Arnulfo", "Crofoot", "F", 75211],
        ["Jerry", "Fenley", "F", 91340],
        ["Betsey", "Sawinski", "F", 10023],
        ["Elijah", "Francescon", "M", 55411],
        ["Temeka", "Gervin", "F", 91342],
        ["Kimiko", "Khong", "F", 75214],
        ["Ayanna", "Maciel", "F", 91344],
        ["Babette", "Rollins", "F", 10023],
        ["Chau", "Mckeag", "F", 55412],
        ["Jerald", "Gaboriault", "M", 75212],
        ["Domingo", "Askari", "M", 10021],
        ["Boyce", "Crider", "F", 10021],
        ["Halley", "Sunseri", "F", 10022],
        ["Ursula", "Erickson", "F", 91341],
        ["Jen", "Krakowsky", "F", 10020],
        ["Winston", "Moldonado", "M", 55414],
        ["Tommie", "Carlstrom", "M", 91343],
        ["Obdulia", "Matute", "F", 75213],
        ["Courtney", "Chisler", "M", 10023],
        ["Mirtha", "Bellavance", "F", 75211],
        ["Tequila", "Venecia", "F", 10020],
        ["Bud", "Ofarrell", "F", 55411],
        ["Else", "Melgoza", "F", 91341],
        ["Mellissa", "Batz", "F", 75213],
        ["Toshiko", "Pasquarello", "F", 75213],
        ["Shelli", "Sund", "F", 91343],
        ["Elois", "Garofolo", "F", 55410],
        ["Jerald", "Cremar", "M", 10021],
        ["Lasandra", "Buchalter", "F", 75211],
        ["Randy", "Hickey", "F", 55410],
        ["Reiko", "Heming", "F", 55412],
        ["Alona", "Luebke", "F", 75212],
        ["Usha", "Guglielmi", "F", 10023],
        ["Estelle", "Lheureux", "F", 91343],
        ["Buford", "Jarosz", "F", 10020],
        ["Julee", "Reily", "F", 55414],
        ["Bruna", "Reno", "F", 10021],
        ["Jacqueline", "Digby", "F", 10022],
        ["Lasandra", "Wishman", "F", 75211],
        ["Matilde", "Pickett", "F", 75213],
        ["Tequila", "Pandya", "F", 91344],
        ["Cary", "Sora", "M", 55410],
        ["Wilburn", "Gess", "F", 10021],
        ["Laree", "Zurita", "F", 10023],
        ["Brendan", "Jividen", "M", 55414],
        ["Mira", "Haynie", "F", 10022],
        ["Michiko", "Organ", "F", 75213],
        ["Eliseo", "Summerfield", "F", 10021],
        ["Diego", "Ladouceur", "F", 55412],
        ["Shira", "Germann", "F", 91341],
        ["Inocencia", "Augenstein", "F", 10020],
        ["Beau", "Stolle", "F", 55413],
        ["Abel", "Jacek", "M", 91340],
        ["Mohammed", "Bergh", "F", 10024],
        ["Dorris", "Lafayette", "F", 10022],
        ["Aliza", "Balck", "F", 55412],
        ["Tommie", "Nidiffer", "M", 75213],
        ["Jess", "Henn", "F", 10024],
        ["Toshiko", "Mascolo", "F", 91344],
        ["Richie", "Lillie", "F", 91340],
        ["Russel", "Hann", "F", 10022],
        ["Emilio", "Dubrow", "M", 75213],
        ["Usha", "Lanphier", "F", 75215],
        ["Dominick", "Siragusa", "M", 10021],
        ["Leigha", "Wagner", "F", 55410],
        ["Pearline", "Mckeen", "F", 10020],
        ["Alisa", "Buffum", "F", 55412],
        ["Domingo", "Maroudas", "M", 75213],
        ["Joni", "Gallego", "F", 10023],
        ["Juliane", "Bunselmeyer", "F", 91340],
        ["Anisha", "Gerow", "F", 91342],
        ["Eleonore", "Hanselman", "F", 75214],
        ["Freddy", "Wechsler", "F", 10020],
        ["Hilde", "Herzer", "F", 75212],
        ["Aubrey", "Kofahl", "M", 91341],
        ["Winston", "Tortorici", "M", 10020],
        ["Emanuel", "Finnicum", "M", 91341],
        ["Roman", "Failing", "M", 75211],
        ["Beulah", "Nease", "F", 91344],
        ["Meryl", "Vu", "F", 10021],
        ["Brendan", "Halsall", "M", 75215],
        ["Timmy", "Neef", "M", 91342],
        ["Don", "Meehan", "F", 91340],
        ["Armanda", "Stahlnecker", "F", 10020],
        ["Jan", "Cicalese", "M", 75213],
        ["Long", "Hitchens", "F", 75212],
        ["Fletcher", "Bohannon", "F", 91341],
        ["Marshall", "Kujawa", "F", 75211],
        ["Maude", "Lowrie", "F", 91341],
        ["Aurelio", "Betz", "F", 75214],
        ["Caprice", "Olague", "F", 10022],
        ["Mavis", "Pinner", "F", 75211],
        ["Bruna", "Gregson", "F", 75213],
        ["Sulema", "Mcninch", "F", 55412],
        ["Marcellus", "Lassiter", "F", 10022],
        ["Brendan", "Katcher", "M", 91342],
        ["Roman", "Hagner", "M", 55413],
        ["Brandie", "Wiley", "F", 75215],
        ["Nicolas", "Munday", "F", 55412],
        ["Usha", "Lyng", "F", 10024],
        ["Randell", "Council", "F", 55412],
        ["Darlene", "Broyles", "F", 91344],
        ["Emmett", "Brougham", "M", 55410],
        ["Barb", "Desoto", "F", 10022],
        ["Corina", "Fujiwara", "F", 55413],
        ["Emmett", "Villarruel", "M", 55410],
        ["Leland", "Cowell", "F", 75211],
        ["Assunta", "Prentice", "F", 55412],
        ["Dionna", "Swingle", "F", 10022],
        ["Cleora", "Bardwell", "F", 91340],
        ["Boyd", "Parrow", "M", 91341],
        ["Melaine", "Sadiq", "F", 75215],
        ["Mirtha", "Lavant", "F", 10023],
        ["Usha", "Vandeyacht", "F", 10022],
        ["Annmarie", "Curren", "F", 55413],
        ["Terence", "Buchholtz", "F", 55410],
        ["Ali", "Maheu", "F", 75213],
        ["Tequila", "Poag", "F", 55410],
        ["Jan", "Delawyer", "M", 91342],
        ["Timmy", "Pinch", "M", 55412],
        ["Kaitlin", "Jess", "F", 10020],
        ["Marian", "Sardina", "F", 55414],
        ["Abel", "Blamer", "M", 55412],
        ["Alishia", "Canida", "F", 91344],
        ["Dimple", "Altemus", "F", 10022],
        ["Abel", "Wollmer", "M", 55414],
        ["Selina", "Rennie", "F", 10021],
        ["Roman", "Gressler", "M", 75213],
        ["Glenn", "Goode", "F", 75213],
        ["Jewell", "Simek", "F", 75211],
        ["Chau", "Smitley", "F", 10023],
        ["Mika", "Lagrow", "F", 75215],
        ["Doretta", "Burleson", "F", 75214],
        ["Alonzo", "Bob", "F", 91344],
        ["Chelsea", "Marson", "F", 91342],
        ["Boyd", "Warnell", "M", 10021],
        ["Maegan", "Botelho", "F", 75213],
        ["Cassondra", "Carmen", "F", 10020],
        ["Randal", "Rimbey", "M", 75211],
        ["Florentina", "Moffit", "F", 55413],
        ["Will", "Stoltzfus", "F", 91340],
        ["Rose", "Bezanson", "F", 75211],
        ["Lynn", "Shoe", "F", 75211],
        ["Denyse", "Callier", "F", 55412],
        ["Marlon", "Fernholz", "M", 10024],
        ["Jacque", "Carlock", "F", 55414],
        ["Jenice", "Palys", "F", 10021],
        ["Sheila", "Mcswain", "F", 55413],
        ["Ariane", "Luttrell", "F", 75214],
        ["Winston", "Klawiter", "M", 10024],
        ["Dominick", "Torralba", "M", 55411],
        ["Kelly", "Atkin", "F", 55414],
        ["Perry", "Cheeks", "F", 75212],
        ["Devora", "Frautschi", "F", 75215],
        ["Shanae", "Van", "F", 91344],
        ["Rosie", "Johnson", "F", 55410],
        ["Timmy", "Gustason", "M", 75213],
        ["Maureen", "Stillings", "F", 75215],
        ["Genevieve", "Galaz", "F", 91343],
        ["Fabiola", "Huddle", "F", 10024],
        ["Guy", "Primmer", "F", 91344],
        ["Jack", "Engelke", "F", 55411],
        ["Scarlet", "Mcateer", "F", 10024],
        ["Leonor", "Wilkinson", "F", 55411],
        ["Gene", "Corns", "F", 10024],
        ["Dudley", "Tomblin", "F", 75212],
        ["Courtney", "Uyematsu", "M", 91340],
        ["Boyd", "Vicencio", "M", 10022],
        ["Jammie", "Higuchi", "F", 10021],
        ["Jerald", "Bolstad", "M", 10020],
        ["Minda", "Garduno", "F", 75214],
        ["Jerald", "Scordo", "M", 10022],
        ["Apryl", "Barz", "F", 75211],
        ["Kelle", "Feazel", "F", 10021],
        ["Inocencia", "Prohaska", "F", 91340],
        ["Shane", "Lacayo", "F", 91341],
        ["Babette", "Sevier", "F", 91343],
        ["Kenda", "Tarbell", "F", 91341],
        ["Trudi", "Nevitt", "F", 10020],
        ["Anamaria", "Vanhouten", "F", 55410],
        ["Chau", "Ciesluk", "F", 55411],
        ["Sergio", "Bourgeois", "F", 10023],
        ["Emmett", "Som", "M", 91344],
        ["Ariane", "Joles", "F", 10024],
        ["Tommie", "Shawe", "M", 91344],
        ["Judson", "Hirt", "F", 10022],
        ["Toby", "Mchorse", "M", 10023],
        ["Betsey", "Diefenderfer", "F", 91344],
        ["Jenice", "Garo", "F", 55410],
        ["Ryann", "Hughes", "F", 10022],
        ["Emmett", "Drach", "M", 91342],
        ["Marilu", "Camors", "F", 55411],
        ["Jamila", "Sim", "F", 10024],
        ["Aracelis", "Mordarski", "F", 75213],
        ["Lane", "Murch", "F", 75213],
        ["Josiah", "Phung", "F", 10024],
        ["Artie", "Guerrette", "F", 91340],
        ["Theola", "Barlage", "F", 91343],
        ["Melynda", "Stroman", "F", 55414],
        ["Destiny", "Rockwell", "F", 91342],
        ["Cary", "Willians", "M", 75211],
        ["Marth", "Harriman", "F", 10020],
        ["Boyd", "Zappone", "M", 55412],
        ["Reatha", "Moak", "F", 91342],
        ["Isa", "Dagnan", "F", 55411],
        ["Rashad", "Fulk", "F", 55414],
        ["Rasheeda", "Hussaini", "F", 91342],
        ["Wilmer", "Zander", "F", 91342],
        ["Anneliese", "Machin", "F", 75213],
        ["Tommie", "Schnautz", "M", 75215],
        ["Marcos", "Filer", "F", 91341],
        ["Franklin", "Roberts", "F", 91340],
        ["Ricky", "Wait", "F", 10023],
        ["Boyd", "Basiliere", "M", 10024],
        ["Angelena", "Odden", "F", 91343],
        ["Jenine", "Dehaan", "F", 91340],
        ["Shery", "Rousse", "F", 91341],
        ["Gwyn", "Batte", "F", 55411],
        ["Merlin", "Cureton", "F", 75213],
        ["Kami", "Madrid", "F", 91341],
        ["Cary", "Woolsey", "F", 91344],
        ["Julian", "Furr", "F", 55410],
        ["Jan", "Stimmel", "M", 75214],
        ["Juliane", "Maiava", "F", 91343],
        ["Gayle", "Corsi", "F", 55410],
        ["Hilde", "Cottam", "F", 55414],
        ["Delmar", "Helsley", "F", 91344],
        ["Mika", "Delfavero", "F", 75215],
        ["Ira", "Conte", "F", 10023],
        ["Roosevelt", "Cawthon", "F", 10021],
        ["Marilu", "Zurn", "F", 10023],
        ["Ronny", "Vanderford", "F", 10020],
        ["Georgine", "Rush", "F", 75213],
        ["Isa", "Etling", "F", 55412],
        ["Ozella", "Lostroh", "F", 75215],
        ["Jacquiline", "Reynard", "F", 75212],
        ["Omega", "Mulverhill", "F", 55411],
        ["Broderick", "Fifield", "F", 10024],
        ["Bertram", "Killion", "F", 91342],
        ["Jermaine", "Czerwinski", "F", 75212],
        ["Rolanda", "Hubler", "F", 91342],
        ["Emilio", "Shiyou", "M", 91344],
        ["Gwyn", "Serge", "F", 10023],
        ["Mickey", "Molden", "F", 10024],
        ["Suzan", "Dunneback", "F", 10023],
        ["Priscila", "Buss", "F", 10022],
        ["Arminda", "Birdsell", "F", 55410],
        ["Myrle", "Jenning", "F", 10021],
        ["Bobette", "Funchess", "F", 75213],
        ["Courtney", "Puckhaber", "M", 55412],
        ["Tommie", "Nerby", "M", 91344],
        ["Angelena", "Waidelich", "F", 75213],
        ["Dorian", "Donoghue", "F", 91340],
        ["Jenice", "Lucci", "F", 55414],
        ["Syreeta", "Follett", "F", 55411],
        ["Ludie", "Petrella", "F", 55412],
        ["Veola", "Simbeck", "F", 75214],
        ["Emilio", "Gompert", "M", 55414],
        ["Jene", "Brockington", "F", 55412],
        ["Sheldon", "Corbin", "F", 55413],
        ["Everette", "Magill", "F", 91342],
        ["Kathie", "Teston", "F", 75215],
        ["Boyd", "Ockimey", "M", 75212],
        ["Darin", "Hulme", "F", 55410],
        ["Irish", "Boutte", "F", 55410],
        ["Brinda", "Ozley", "F", 75213],
        ["Leilani", "Dorado", "F", 75215],
        ["Mana", "Guedry", "F", 75211],
        ["Librada", "Lina", "F", 75215],
        ["Lasandra", "Barkus", "F", 75213],
        ["Angelena", "Study", "F", 75212],
        ["Lezlie", "Propp", "F", 91344],
        ["Dino", "Costigan", "F", 91342],
        ["Ardith", "Luckett", "F", 91343],
        ["Marceline", "Mcredmond", "F", 55413],
        ["Juliane", "Bahner", "F", 55412],
        ["Lupe", "Poche", "F", 91342],
        ["Stanford", "Ogle", "F", 10024],
        ["Jarod", "Kitchens", "F", 55410],
        ["Elijah", "Trivisonno", "M", 10024],
        ["Marlon", "Aliberti", "M", 55410],
        ["Freeman", "Elamin", "F", 55414],
        ["Darnell", "Ferre", "M", 55411],
        ["Gaynell", "Carden", "F", 91342],
        ["Mauricio", "Dee", "F", 55412],
        ["Elijah", "Sowle", "M", 91340],
        ["Darrin", "Frericks", "M", 10023],
        ["Berry", "Crites", "F", 91340],
        ["Cary", "Toh", "M", 55410],
        ["Shirleen", "Waltjen", "F", 91342],
        ["Oscar", "Applegate", "F", 55413],
        ["Sherika", "Blow", "F", 10021],
        ["Harriet", "Sansom", "F", 91340],
        ["Emile", "Malave", "F", 75211],
        ["Scottie", "Kidd", "F", 55410],
        ["Joslyn", "Verner", "F", 75211],
        ["Lezlie", "Bub", "F", 10024],
        ["Elden", "Gerson", "F", 55411],
        ["Stanton", "Maclin", "F", 75211],
        ["Lyla", "Dossantos", "F", 10023],
        ["Abel", "Boughter", "M", 55413],
        ["Shery", "Amigon", "F", 75212],
        ["Marc", "Aten", "F", 55412],
        ["Gilbert", "Stoneking", "F", 91340],
        ["Devora", "Schuneman", "F", 75212],
        ["Shirleen", "Fakhouri", "F", 75213],
        ["Nelia", "Sant", "F", 91344],
        ["Lezlie", "Hinzmann", "F", 91344],
        ["Rocco", "Ostlund", "F", 91344],
        ["Van", "Witty", "F", 55410],
        ["Bud", "Vicini", "F", 75215],
        ["Denver", "Portugal", "F", 55412],
        ["Mireya", "Richmond", "F", 55411],
        ["Wilford", "Backer", "F", 10023],
        ["Irving", "Wakeland", "F", 75215],
        ["Grover", "Bergevin", "F", 55410],
        ["Sammie", "Quint", "F", 91344],
        ["Cary", "Bijou", "M", 75212],
        ["Celestine", "Eichler", "F", 55413],
        ["Alishia", "Struyk", "F", 91344],
        ["Donte", "Doctor", "F", 10021],
        ["Harvey", "Branch", "F", 10021],
        ["Ron", "Bly", "F", 91340],
        ["Jamie", "Grube", "F", 10021],
        ["Beatrice", "Dana", "F", 91344],
        ["Michal", "Heath", "F", 75215],
        ["Toshiko", "Salsedo", "F", 75211],
        ["Humberto", "Barras", "F", 75214],
        ["Toshiko", "Herner", "F", 55414],
        ["Earl", "Searle", "F", 55413],
        ["Temeka", "Armeli", "F", 10022],
        ["Sun", "Simonton", "F", 10022],
        ["Theola", "Atcheson", "F", 10022],
        ["Piedad", "Salkeld", "F", 10023],
        ["Mika", "Toor", "F", 55413],
        ["Lynwood", "Halfacre", "F", 55413],
        ["Abel", "Cribbin", "M", 10024],
        ["Aaron", "Belford", "F", 55411],
        ["Aubrey", "Rebolloso", "M", 91344],
        ["Yung", "Hatton", "F", 75214],
        ["Mitchel", "Grill", "F", 10023],
        ["Eliza", "Wine", "F", 91341],
        ["Meaghan", "Halsey", "F", 75211],
        ["Grover", "Champlin", "F", 91340],
        ["Devora", "Weinrich", "F", 75215],
        ["Maricela", "Brittingham", "F", 10023],
        ["Van", "Ottaway", "M", 91341],
        ["Efren", "Cavanaugh", "F", 55412],
        ["Abel", "Denzel", "M", 91342],
        ["Mac", "Gabriele", "F", 55412],
        ["Robbie", "Mclean", "F", 91343],
        ["Izola", "Flannagan", "F", 10023],
        ["Kasey", "Mcclanahan", "F", 55412],
        ["Marget", "Vanorder", "F", 55410],
        ["Lawrence", "Laguerre", "F", 91343],
        ["Maryrose", "Mcinnis", "F", 55412],
        ["Gilbert", "Burditt", "F", 91341],
        ["Rudy", "Esposito", "F", 55414],
        ["Harvey", "Amendola", "F", 75212],
        ["Ivory", "Witten", "F", 75211],
        ["Fatimah", "Bulluck", "F", 75215],
        ["Gaylene", "Feist", "F", 55411],
        ["Darline", "Keefe", "F", 75213],
        ["Rufina", "Ortis", "F", 75211],
        ["Octavio", "Carnes", "F", 10023],
        ["Orval", "Mason", "F", 10022],
        ["Pearlene", "Halton", "F", 55410],
        ["Elouise", "Masters", "F", 75213],
        ["Emanuel", "Hepa", "M", 55413],
        ["Boyd", "Raviscioni", "M", 10023],
        ["Domingo", "Pecanty", "M", 91342],
        ["August", "Straker", "F", 75213],
        ["Kendall", "Boon", "F", 91344],
        ["Courtney", "Karraker", "M", 10021],
        ["Carmelo", "Mcafee", "F", 91343],
        ["Obdulia", "Toombs", "F", 55414],
        ["Cary", "Pinell", "M", 10023],
        ["Jessie", "Simons", "F", 55413],
        ["Avril", "Gemmill", "F", 91340],
        ["Ty", "Feliz", "F", 91342],
        ["Raina", "Larkin", "F", 10024],
        ["Caron", "Dubuque", "F", 91343],
        ["Gabriel", "Moye", "F", 75211],
        ["Domingo", "Guerino", "M", 55414],
        ["Marilu", "Castell", "F", 75214],
        ["Shayne", "Weitzel", "F", 75212],
        ["Florrie", "Dolin", "F", 10023],
        ["Dedra", "Prindle", "F", 10021],
        ["Domingo", "Marso", "M", 55414],
        ["Erminia", "Pancheri", "F", 91340],
        ["Marget", "Smallen", "F", 91343],
        ["Faye", "Bilbo", "F", 10021],
        ["Jay", "Farrer", "F", 10023],
        ["Elbert", "Falls", "F", 10020],
        ["Yvone", "Bahena", "F", 55412],
        ["Collette", "Snyder", "F", 55413],
        ["Rory", "Birmingham", "F", 55413],
        ["Milford", "Urbina", "F", 10021],
        ["Marget", "Frankenberry", "F", 75211],
        ["Tova", "Loken", "F", 91342],
        ["Eddy", "Halsted", "F", 55413],
        ["Berry", "Ellenburg", "F", 55413],
        ["Jack", "Turner", "F", 91344],
        ["Shirleen", "Shamp", "F", 55414],
        ["Alishia", "Mannis", "F", 55410],
        ["Noella", "Ragsdale", "F", 91343],
        ["Rory", "Moorer", "F", 10022],
        ["Marlon", "Fujikawa", "M", 10024],
        ["Timmy", "Mones", "M", 55411],
        ["Edward", "Burruss", "F", 55414],
        ["Orville", "Rakes", "F", 75215],
        ["Emilio", "Lajara", "M", 55410],
        ["Rae", "Tart", "F", 55411],
        ["Sibyl", "Zeringue", "F", 91344],
        ["Socorro", "Meads", "F", 91342],
        ["Brendan", "Gansburg", "M", 55412],
        ["Cary", "Oktavec", "M", 10021],
        ["Emilio", "Grodski", "M", 91343],
        ["Leota", "Mcjunkin", "F", 10023],
        ["Jerald", "Milonas", "M", 75214],
        ["Dewitt", "Robertson", "F", 55413],
        ["Erinn", "Hazlip", "F", 10023],
        ["Darrin", "Rosewell", "M", 10021],
        ["Lamar", "Sandifer", "F", 91341],
        ["Elois", "Ruderman", "F", 55414],
        ["Sunday", "Houston", "F", 75215],
        ["Ty", "Sturm", "F", 75212],
        ["Saran", "Beiler", "F", 91344],
        ["Cyrus", "Mcdade", "F", 10024],
        ["Callie", "Mehaffey", "F", 75211],
        ["Mana", "Corrick", "F", 75214],
        ["Monique", "Bottoms", "F", 10020],
        ["Randal", "Hilborn", "M", 10023],
        ["Emilio", "Grapes", "M", 10020],
        ["Tommie", "Willmarth", "M", 55414],
        ["Dominick", "Airington", "M", 75211],
        ["Marilu", "Tubby", "F", 91342],
        ["Darnell", "Larrivee", "M", 55411],
        ["Abel", "Hanf", "M", 55412],
        ["Dimple", "Seagren", "F", 55410],
        ["Lupita", "Garceau", "F", 75213],
        ["Errol", "Gleaves", "F", 91342],
        ["Caleb", "Murley", "F", 55414],
        ["Jami", "Lage", "F", 91344],
        ["Aliza", "Strehlow", "F", 10024],
        ["Tyree", "Casados", "F", 55413],
        ["Leana", "Navas", "F", 10021],
        ["Phil", "Silvera", "F", 55411],
        ["Alishia", "Heldenbrand", "F", 75212],
        ["Kimiko", "Hounshell", "F", 91340],
        ["Criselda", "Kaeo", "F", 91342],
        ["Xavier", "Silvia", "F", 55413],
        ["Candi", "Erving", "F", 55411],
        ["Toshiko", "Prusak", "F", 10024],
        ["Courtney", "Paone", "M", 91343],
        ["Brett", "Stringham", "F", 55412],
        ["Terri", "Chaput", "F", 75214],
        ["Ofelia", "Pugsley", "F", 91341],
        ["Franklyn", "Kays", "F", 91342],
        ["Arlie", "Helvey", "F", 91343],
        ["Hilario", "Kennerson", "F", 91344],
        ["Timmy", "Sarpy", "M", 91344],
        ["Abel", "Traut", "M", 91344],
        ["Rafaela", "Killian", "F", 55411],
        ["Vivien", "Gildersleeve", "F", 55411],
        ["Irena", "Goodwin", "F", 10023],
        ["Rubin", "Tonkin", "F", 75212],
        ["Toby", "Witz", "M", 91343],
        ["Marlon", "Mossa", "M", 75211],
        ["Cary", "Kendzior", "M", 55411],
        ["Bruce", "Mctaggart", "F", 91342],
        ["Hector", "Sackett", "F", 55412],
        ["Clarinda", "Quattlebaum", "F", 55410],
        ["Toby", "Burrington", "M", 91340],
        ["Shery", "Delaluz", "F", 55413],
        ["Winfred", "Ladd", "F", 55411],
        ["Reda", "Slick", "F", 91341],
        ["Suzette", "Mcqueary", "F", 91343],
        ["Darnell", "Berne", "M", 91341],
        ["Jordan", "Deshong", "F", 10024],
        ["Elois", "Topia", "F", 75215],
        ["Alecia", "Mcmakin", "F", 10024],
        ["Nolan", "Heitman", "F", 75214],
        ["Edward", "Loose", "F", 75214],
        ["Chau", "Tsou", "F", 91341],
        ["Jennell", "Mendelson", "F", 10023],
        ["Timmy", "Dulude", "M", 75211],
        ["Roselia", "Novak", "F", 91342],
        ["Juliane", "Neylon", "F", 55414],
        ["Lissette", "Oshea", "F", 91342],
        ["Tyrell", "Karnes", "F", 10024],
        ["Mattie", "Puckett", "F", 91340],
        ["Winston", "Bethune", "F", 10024],
        ["Ariane", "Chupka", "F", 55412],
        ["Wiley", "Pleas", "F", 10024],
        ["Brendon", "Ferebee", "F", 55410],
        ["Jose", "Ureno", "F", 91344],
        ["Elijah", "Winstanley", "M", 55413],
        ["Toby", "Genis", "M", 75214],
        ["Lee", "Teets", "F", 10020],
        ["Edwardo", "Galan", "F", 10023],
        ["Tamra", "Salvatore", "F", 55411],
        ["Van", "Hillesheim", "M", 91344],
        ["Toshiko", "Russian", "F", 91343],
        ["Dominick", "Lehtonen", "M", 55414],
        ["Numbers", "Newbold", "F", 10022],
        ["Ariane", "Blatz", "F", 10021],
        ["Devorah", "Boothroyd", "F", 55414],
        ["Jefferson", "Locke", "F", 91342],
        ["Sandi", "Fouse", "F", 91344],
        ["Magdalen", "Spinelli", "F", 91344],
        ["Darryl", "Rains", "F", 55414],
        ["Piedad", "Stegemann", "F", 10023],
        ["Nicky", "Kroll", "F", 75213],
        ["Torrie", "Cardello", "F", 75211],
        ["Garland", "Schillinger", "F", 91341],
        ["Wes", "Nadeau", "F", 91343],
        ["Sylvia", "Hering", "F", 10023],
        ["Minh", "Degarmo", "F", 91341],
        ["Arnoldo", "Grinstead", "F", 91341],
        ["Trena", "Soluri", "F", 55414],
        ["Roman", "Paar", "M", 75211],
        ["Timmy", "Kratzke", "M", 91340],
        ["Shantay", "Burk", "F", 75215],
        ["Sherie", "Whitehair", "F", 55412],
        ["Malik", "Dejean", "F", 10021],
        ["Ronald", "Warlick", "F", 75214],
        ["Alphonso", "Powe", "F", 10023],
        ["Georgine", "Lagrange", "F", 75215],
        ["Shenita", "Cromedy", "F", 91340],
        ["Nelson", "Tester", "F", 55414],
        ["Talitha", "Dolman", "F", 10024],
        ["Darrin", "Winborn", "M", 55410],
        ["Jenice", "Espaillat", "F", 91340],
        ["Arminda", "Calliste", "F", 91344],
        ["Marceline", "Stockley", "F", 75214],
        ["Bruno", "Mcentire", "F", 55411],
        ["Joellen", "Few", "F", 55414],
        ["Neely", "Earhart", "F", 91343],
        ["Cathie", "Hancock", "F", 55413],
        ["Russell", "Andress", "F", 10020],
        ["Chong", "Steib", "F", 10020],
        ["Tyrell", "Daughtery", "F", 91342],
        ["Danny", "Center", "F", 10024],
        ["Taylor", "Hooks", "F", 75211],
        ["Omega", "Digerolamo", "F", 91341],
        ["Tamala", "Sage", "F", 10020],
        ["Gary", "Lerner", "F", 10021],
        ["Micaela", "Eskew", "F", 55413],
        ["Carlos", "Krupp", "F", 91342],
        ["Darnell", "Foulds", "F", 75212],
        ["Emilio", "Vogle", "M", 91342],
        ["Zenobia", "Hamner", "F", 55410],
        ["Emil", "Victorino", "F", 75214],
        ["Toshiko", "Branche", "F", 75212],
        ["Walter", "Buerger", "F", 75213],
        ["Toni", "Stell", "F", 91342],
        ["Bobby", "Guillory", "F", 10023],
        ["Eric", "April", "F", 55413],
        ["Evelia", "Shires", "F", 91344],
        ["Chet", "Franz", "F", 91340],
        ["Laura", "Fairbanks", "F", 55412],
        ["Freeda", "Gagnon", "F", 75214],
        ["Yong", "Kime", "F", 10023],
        ["Darrell", "Hammonds", "F", 55414],
        ["Jan", "Zabawa", "M", 10023],
        ["Tameika", "Himelfarb", "F", 75212],
        ["Toby", "Stromme", "M", 10021],
        ["Lexie", "Rydzewski", "F", 55411],
        ["Paul", "Aguayo", "F", 91343],
        ["Tory", "Manzano", "F", 10022],
        ["Echo", "Zurich", "F", 10020],
        ["Van", "Bruins", "M", 91344],
        ["Zachery", "Baumgarten", "F", 91341],
        ["Les", "Slavens", "F", 55411],
        ["Janay", "Heacox", "F", 55410],
        ["Erik", "Laramie", "F", 10023],
        ["Chadwick", "Whitham", "F", 75215],
        ["Giovanna", "Millard", "F", 75214],
        ["Harley", "Hunter", "F", 75212],
        ["Reiko", "Skenandore", "F", 10022],
        ["Winfred", "Houde", "F", 91340],
        ["Olin", "Harr", "F", 75211],
        ["Dominick", "Edgehill", "M", 75214],
        ["Humberto", "Mccown", "F", 75213],
        ["Elois", "Zufall", "F", 75211],
        ["Elbert", "Beem", "F", 91342],
        ["Elmer", "Viverette", "F", 55412],
        ["Doug", "Fillmore", "F", 10021],
        ["Jan", "Lisowe", "M", 55413],
        ["Laronda", "Schuette", "F", 55414],
        ["Darnell", "Vodicka", "M", 75214],
        ["Randal", "Raider", "M", 55411],
        ["Jerry", "Hendricks", "F", 91344],
        ["Dakota", "Grandstaff", "F", 75211],
        ["Juliana", "Doman", "F", 55413],
        ["Jerald", "Puffinberger", "M", 55412],
        ["Brandon", "Shorey", "F", 55413],
        ["Apryl", "Suss", "F", 75214],
        ["Timmy", "Whetstine", "M", 91342],
        ["Meredith", "Etherton", "F", 55413],
        ["Odell", "Blubaugh", "F", 91341],
        ["Tomika", "Godbey", "F", 91344],
        ["Brendan", "Abolt", "M", 91341],
        ["Margurite", "Haberman", "F", 75211],
        ["Temeka", "Shinall", "F", 10022],
        ["Florencio", "Cathey", "F", 55414],
        ["Piedad", "Senteno", "F", 10021],
        ["Adam", "Wen", "F", 75214],
        ["Dominick", "Lanphier", "M", 75214],
        ["Francoise", "Bosma", "F", 10021],
        ["Timmy", "Lucchini", "M", 10024],
        ["Arminda", "Grober", "F", 55412],
        ["Kristofer", "Balls", "F", 75212],
        ["Jan", "Loeser", "M", 55413],
        ["Erinn", "Tolin", "F", 10023],
        ["Randy", "Winkleman", "F", 10023],
        ["Darron", "Banfield", "F", 75214],
        ["Wei", "Castaner", "F", 10023],
        ["Zita", "Lahti", "F", 55410],
        ["Porfirio", "Villarreal", "F", 91341],
        ["Lemuel", "Eilers", "F", 91343],
        ["Herta", "Han", "F", 91341],
        ["Waltraud", "Hamons", "F", 91341],
        ["Santos", "Ganther", "M", 55413],
        ["Lavone", "Zigler", "F", 55414],
        ["Meggan", "Berlinger", "F", 75215],
        ["Brendan", "Arrants", "M", 10022],
        ["Shirleen", "Relic", "F", 75212],
        ["Reiko", "Redditt", "F", 55414],
        ["Shannon", "Place", "F", 75215],
        ["Darrin", "Curb", "M", 10022],
        ["Librada", "Sadlier", "F", 91342],
        ["Randal", "Berroa", "M", 91343],
        ["Jacquiline", "Verra", "F", 55410],
        ["Gilma", "Bessler", "F", 75212],
        ["Lorelei", "Lerma", "F", 75215],
        ["Brendan", "Smutnick", "M", 91340],
        ["Dan", "Burdine", "F", 10021],
        ["Dominick", "Cudworth", "M", 91341],
        ["Cecila", "Whitson", "F", 91340],
        ["Gabriel", "Danko", "F", 91344],
        ["Peter", "Driscoll", "F", 10023],
        ["Dominick", "Mccolgan", "M", 55413],
        ["Darrin", "Brierley", "M", 75212],
        ["Travis", "Thorne", "F", 10020],
        ["Boyd", "Trautwein", "M", 55412],
        ["Lance", "Bisbee", "F", 91344],
        ["Jody", "Ream", "F", 55410],
        ["Franklyn", "Pelletier", "F", 91344],
        ["Dorthey", "Lonon", "F", 10022],
        ["Nestor", "Blizzard", "F", 91343],
        ["Domingo", "Vaccarezza", "M", 75214],
        ["Moshe", "Roca", "F", 55410],
        ["Pablo", "Arwood", "F", 91342],
        ["Jack", "Stradford", "F", 55412],
        ["Toby", "Tamlin", "M", 75215],
        ["Emmett", "Dimsdale", "M", 55412],
        ["Li", "Stalcup", "F", 10024],
        ["Al", "Ervin", "F", 10021],
        ["Cecille", "Perine", "F", 55412],
        ["Marietta", "Murphey", "F", 10020],
        ["Anna", "Christiano", "F", 75211],
        ["Trent", "Damiani", "F", 91340],
        ["Roosevelt", "Rummel", "F", 55413],
        ["Boyd", "Shollenberger", "M", 75212],
        ["Raelene", "Mccluney", "F", 91341],
        ["Willia", "Martinek", "F", 55414],
        ["Mi", "Mary", "F", 91341],
        ["Cristal", "Toups", "F", 75213],
        ["Abel", "Mcenery", "M", 10022],
        ["Maxima", "Kurt", "F", 75213],
        ["Emanuel", "Gett", "M", 75212],
        ["Darnell", "Farrall", "M", 75213],
        ["Donald", "Johansson", "F", 10022],
        ["Bree", "Elizondo", "F", 75211],
        ["Wei", "Mohar", "F", 75211],
        ["Malisa", "Kahl", "F", 55412],
        ["Magdalen", "Kinstler", "F", 91340],
        ["Janessa", "Silver", "F", 55412],
        ["Aliza", "Sangha", "F", 55410],
        ["Irving", "Wadlington", "F", 55414],
        ["Elijah", "Trela", "M", 91340],
        ["Ghislaine", "Stauffer", "F", 10020],
        ["Wei", "Turnley", "F", 10020],
        ["Chin", "Skillern", "F", 75214],
        ["Renaldo", "Lundell", "F", 10024],
        ["Theron", "Koop", "F", 75212],
        ["Omega", "Spilde", "F", 55412],
        ["Philip", "Fine", "F", 91343],
        ["Tony", "Ambriz", "F", 75215],
        ["Jude", "Nussbaum", "F", 91344],
        ["Angelena", "Heigl", "F", 10022],
        ["Tommie", "Matava", "M", 91344],
        ["Ezekiel", "Abercrombie", "F", 10022],
        ["Sammie", "Cusack", "F", 10021],
        ["Maddie", "Jones", "F", 10020],
        ["Darren", "Jacinto", "F", 75213],
        ["Shawn", "Sterns", "F", 75213],
        ["Sung", "Braggs", "F", 91341],
        ["Clair", "Flannery", "F", 91342],
        ["Oscar", "Epps", "F", 10024],
        ["Dara", "Quintana", "F", 91343],
        ["Alejandro", "Bombardier", "F", 10022],
        ["Shery", "Berentson", "F", 10023],
        ["Lezlie", "Steidel", "F", 91344],
        ["Emmett", "Genier", "M", 55412],
        ["Anya", "Cato", "F", 91340],
        ["Jan", "Dunomes", "M", 10023],
        ["Cristopher", "Felty", "F", 55410],
        ["Anastacia", "Coley", "F", 55414],
        ["Dorla", "Eddington", "F", 75212],
        ["Ferne", "Gantz", "F", 55412],
        ["Dominick", "Sas", "M", 91344],
        ["Tera", "Bonanno", "F", 55414],
        ["Faustina", "Ketter", "F", 55410],
        ["Brendan", "Wittmann", "M", 75214],
        ["Brendan", "Dibona", "M", 75214],
        ["Librada", "Fridman", "F", 91344],
        ["Stephenie", "Minjares", "F", 10024],
        ["Henriette", "Mcclung", "F", 10023],
        ["Adolfo", "Sabin", "F", 55412],
        ["Randal", "Barash", "M", 10023],
        ["Renetta", "Orwick", "F", 91340],
        ["Timmy", "Casso", "M", 91342],
        ["Marylynn", "Schnieders", "F", 75215],
        ["Jerald", "Mcredmond", "M", 75212],
        ["Armanda", "Leskovec", "F", 75213],
        ["Beaulah", "Borgen", "F", 75211],
        ["Waltraud", "Anastasia", "F", 55414],
        ["Abel", "Sandigo", "M", 10023],
        ["Santos", "Azim", "M", 91340],
        ["Briana", "Tiemann", "F", 55412],
        ["Winston", "Colletti", "F", 10023],
        ["Toshiko", "Chargois", "F", 75215],
        ["Elijah", "Pergola", "M", 75214],
        ["Gerald", "Fortson", "F", 55414],
        ["Emilio", "Shemanski", "M", 91343],
        ["Blair", "Bachmann", "F", 75212],
        ["Randall", "Lees", "F", 75212],
        ["Johnnie", "Sheahan", "F", 10023],
        ["Audria", "Tillison", "F", 10023],
        ["Brinda", "Bockoven", "F", 91344],
        ["Dwana", "Carmouche", "F", 75212],
        ["Courtney", "Winemiller", "M", 10024],
        ["Waltraud", "Mehrhoff", "F", 91343],
        ["Jen", "Pottenger", "F", 91341],
        ["Estela", "Smail", "F", 91344],
        ["Toby", "Brinlee", "M", 10021],
        ["Preston", "Decker", "F", 75215],
        ["Shery", "Catanach", "F", 10020],
        ["Boyd", "Escajeda", "M", 10020],
        ["Markita", "Heasley", "F", 91344],
        ["Emiko", "Holzer", "F", 55410],
        ["Carlo", "Creekmore", "F", 10021],
        ["Cyrus", "Noguera", "F", 10020],
        ["Roselia", "Severson", "F", 55410],
        ["Kelly", "Heid", "F", 10022],
        ["Gaynelle", "Danis", "F", 75211],
        ["Randy", "Weakley", "F", 10021],
        ["Jacquiline", "Deangelus", "F", 75212],
        ["Jimmie", "Moldenhauer", "F", 10022],
        ["Meggan", "Bakula", "F", 75213],
        ["Rey", "Plumley", "F", 75212],
        ["Mana", "Marshman", "F", 75215],
        ["Librada", "Galpin", "F", 55412],
        ["Hildegard", "Wilber", "F", 91344],
        ["Kimiko", "Macwilliams", "F", 55412],
        ["Leland", "Stender", "F", 91340],
        ["Tommie", "Mirchandani", "M", 75215],
        ["Kent", "Twitchell", "F", 10023],
        ["Betsey", "Swensson", "F", 91344],
        ["Kenneth", "Read", "F", 55411],
        ["Zack", "Schnabel", "F", 55414],
        ["Magdalen", "Caito", "F", 75213],
        ["Mirtha", "Hincks", "F", 55412],
        ["Hobert", "Hooley", "F", 10021],
        ["Bill", "Lin", "F", 55410],
        ["Isidra", "Mcdanel", "F", 55412],
        ["Abel", "Springstead", "M", 55414],
        ["Mickey", "Gerrish", "F", 55410],
        ["Gwyn", "Daine", "F", 91340],
        ["Katheryn", "Munguia", "F", 55412],
        ["Timmy", "Dieringer", "M", 75211],
        ["Toshiko", "Devoy", "F", 55412],
        ["Sung", "Alarcon", "F", 75211],
        ["Elliot", "Alley", "F", 75214],
        ["Chong", "Ruddell", "F", 91344]
    ];

    this.position = -1;
}

ZipCodeStudyRecords.prototype.getSampleFirstName = function () {
    return this.zipCodeStudyData[this.position][0];
};

ZipCodeStudyRecords.prototype.getSampleLastName = function () {
    return this.zipCodeStudyData[this.position][1];
};

ZipCodeStudyRecords.prototype.getSampleGender = function () {
    return this.zipCodeStudyData[this.position][2];
};

ZipCodeStudyRecords.prototype.getSampleZipCode = function () {
    return this.zipCodeStudyData[this.position][3];
};

ZipCodeStudyRecords.prototype.readNextRecord = function () {
    this.position++;
    if (this.position >= this.zipCodeStudyData.length) {
        this.position = 0;
        return false;
    } else {
        return true;
    }
};

function openZipCodeStudyRecordSet() {
    return new ZipCodeStudyRecords();
}



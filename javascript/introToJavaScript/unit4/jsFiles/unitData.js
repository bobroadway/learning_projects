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
    
        studenRecords.getStudentNumber();
        studenRecords.getStudentName();
        studenRecords.getStudentAddress();
        studenRecords.getStudentZipCode();
        studenRecords.getStudentGender();
        studenRecords.getStudentCourseNumber();
        
    These methods return data for the current record.
*/
function StudentEnrollmentsRecords() {
    this.studentEnrollmentData = [
        [101, "Joe Coyne", "123 Some St.", 53711, "M", 18500],
        [102, "Fred Hensen", "2205 Grand St.", 53712, "M", 18500],
        [103, "Ethel Roselle", "190 Fox St.", 53713, "F", 18530],
        [104, "Barney Curry", "1600 Ash St.", 53714, "M", 18520],
        [105, "Wilma Hilgart", "2205 Grand St.", 53712, "F", 18540],
        [106, "Greg Statz", "190 Fox St.", 53713, "M", 18500],
        [107, "Mark Stanley", "2205 Grand St.", 53712, "M", 18500],
        [108, "Sandy Flynn", "1600 Ash St.", 53714, "F", 18530],
        [109, "Chris Foley", "190 Fox St.", 53713, "M", 18520],
        [110, "Dan Bristol", "123 Some St.", 53716, "M", 18500],
        [111, "Don Buell", "190 Fox St.", 53713, "M", 18540],
        [112, "Glen Doran", "2205 Grand St.", 53712, "M", 18500],
        [113, "Bill Gardiner", "123 Some St.", 53711, "M", 18520],
        [114, "Karen Mack", "190 Fox St.", 53713, "F", 18500],
        [115, "Dianne Klein", "2205 Grand St.", 53712, "F", 18530],
        [116, "Dawn Tillman", "1600 Ash St.", 53714, "F", 18500],
        [117, "Ed O'Connor", "190 Fox St.", 53713, "M", 18500],
        [118, "Hugo Matson", "2205 Grand St.", 53712, "M", 18500],
        [119, "Dave Koch", "1600 Ash St.", 53714, "M", 18540],
        [120, "Mike Smith", "190 Fox St.", 53713, "M", 18520],
        [121, "Alan Smith", "123 Some St.", 53711, "M", 18530],
        [122, "Brian Smith", "190 Fox St.", 53713, "M", 18500],
        [123, "Nancy Hagman", "2205 Grand St.", 53712, "F", 18500],
        [124, "Andre Dillard", "1600 Ash St.", 53714, "M", 18520],
        [125, "Jack Darrow", "190 Fox St.", 53713, "M", 18500],
        [126, "Vicki Berg", "2205 Grand St.", 53712, "F", 18540],
        [127, "Frank Marco", "123 Some St.", 53711, "M", 18500],
        [128, "Brenda Smithson", "123 Some St.", 53711, "F", 18530],
        [129, "Barry Thorpe", "2205 Grand St.", 53712, "M", 18500],
        [130, "Sheri Lytle", "1600 Ash St.", 53714, "F", 18520],
        [131, "Connie Hunter", "1600 Ash St.", 53714, "F", 18500],
        [132, "Jim Cramer", "2205 Grand St.", 53712, "M", 18540],
        [133, "Craig Kim", "190 Fox St.", 53713, "M", 18530],
        [134, "Jay Meyer", "1600 Ash St.", 53714, "M", 18500],
        [135, "John Reyes", "2205 Grand St.", 53712, "M", 18500],
        [136, "Curtis Strand", "190 Fox St.", 53713, "M", 18520],
        [137, "Fred Balmer", "123 Some St.", 53711, "M", 18500],
        [138, "Donna Gorman", "2205 Grand St.", 53712, "F", 18500],
        [139, "Janice Hall", "190 Fox St.", 53713, "F", 18530],
        [140, "Jenny Houseman", "1600 Ash St.", 53714, "F", 18540],
        [141, "Jane Linderman", "2205 Grand St.", 53712, "F", 18500],
        [142, "Sheila Moore", "123 Some St.", 53711, "F", 18520],
        [143, "Seth Olson", "190 Fox St.", 53713, "M", 18500],
        [144, "Kathy Roberts", "2205 Grand St.", 53712, "F", 18530],
        [145, "Laura Johnson", "1600 Ash St.", 53714, "F", 18520],
        [146, "Sharon Lee", "2205 Grand St.", 53712, "F", 18540],
        [147, "Jeff Sager", "2205 Grand St.", 53712, "M", 18530],
        [148, "Steve Stone", "2205 Grand St.", 53712, "M", 18520],
        [149, "Nick Mathis", "190 Fox St.", 53713, "M", 18530],
        [150, "Carrie Ramirez", "2205 Grand St.", 53712, "F", 18500]
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

StudentEnrollmentsRecords.prototype.getStudentCourseNumber = function () {
    return this.studentEnrollmentData[this.position][5];
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



StudentEnrollmentsRecords.prototype.sortByClassNumber = function () {
    this.studentEnrollmentData.sort(function (studentArrayA, studentArrayB) {
        if (studentArrayA[5] < studentArrayB[5]) {
            return -1;
        } else if (studentArrayA[5] > studentArrayB[5]) {
            return 1;
        } else {
            return 0;
        }
    });
};

StudentEnrollmentsRecords.prototype.sortByClassNumberGender = function () {
    this.studentEnrollmentData.sort(function (studentArrayA, studentArrayB) {
        if (studentArrayA[5] < studentArrayB[5]) {
            return -1;
        } else if (studentArrayA[5] > studentArrayB[5]) {
            return 1;
        } else if (studentArrayA[5] === studentArrayB[5]){
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


StudentEnrollmentsRecords.prototype.sortByZipCode = function () {
    this.studentEnrollmentData.sort(function (studentArrayA, studentArrayB) {
        if (studentArrayA[3] < studentArrayB[3]) {
            return -1;
        } else if (studentArrayA[3] > studentArrayB[3]) {
            return 1;
        } else {
            return 0;
        }
    });
}

StudentEnrollmentsRecords.prototype.sortByGender = function () {
    this.studentEnrollmentData.sort(function (studentArrayA, studentArrayB) {
        if (studentArrayA[4] < studentArrayB[4]) {
            return -1;
        } else if (studentArrayA[4] > studentArrayB[4]) {
            return 1;
        } else {
            return 0;
        }
    });
}


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

EmployeePayrollRecords.prototype.sortByHourlyWage = function () {
    this.studentEnrollmentData.sort(function (employeeArrayA, employeeArrayB) {
        if (employeeArrayA[2] < employeeArrayB[2]) {
            return -1;
        } else if (employeeArrayA[2] > employeeArrayB[2]) {
            return 1;
        } else {
            return 0;
        }
    });
}

EmployeePayrollRecords.prototype.sortByHoursWorked = function () {
    this.studentEnrollmentData.sort(function (employeeArrayA, employeeArrayB) {
        if (employeeArrayA[3] < employeeArrayB[3]) {
            return -1;
        } else if (employeeArrayA[3] > employeeArrayB[3]) {
            return 1;
        } else {
            return 0;
        }
    });
}


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

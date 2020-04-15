from django.db import models 

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.IntegerField()
    password = models.CharField(max_length=50)


class Personnel(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    dob = models.DateField()
    phone1 = models.IntegerField()
    phone2 = models.IntegerField(blank=True)
    nin = models.CharField(max_length=100, blank=True, unique=True)
    title = models.CharField(max_length=100)
    startdate = models.DateField()
    qualif = models.CharField(max_length=100)


class Income(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    customer = models.CharField(max_length=100)
    phone = models.IntegerField()
    product = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    unitprice = models.IntegerField()
    quantity = models.IntegerField()
    subtotal = models.IntegerField()
    tax = models.IntegerField(blank=True)
    description = models.CharField(max_length=500, blank=True)
    total = models.IntegerField()
    invnumber = models.IntegerField(blank=True)
    amountpaid = models.IntegerField()
    paymode = models.CharField(max_length=50)
    receiptnum = models.IntegerField(blank=True)
    baldue = models.IntegerField(blank=True)
    balduedate = models.DateTimeField(blank=True)


class Expenditure(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    suppl = models.CharField(max_length=100)
    phone = models.IntegerField()
    product = models.CharField(max_length=50)
    typeofex = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    unitprice  = models.IntegerField()
    subtot  = models.IntegerField()
    tax = models.IntegerField(blank=True)
    description  = models.CharField(max_length=500, blank=True)
    total = models.IntegerField()
    invno = models.IntegerField(blank=True)
    amntpd = models.IntegerField()
    paymod = models.CharField(max_length=50)
    rcptno = models.IntegerField(blank=True)
    baldue = models.IntegerField(blank=True)
    baldate = models.DateTimeField(blank=True)

class Consumable(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    qty = models.IntegerField()
    qtyused = models.IntegerField()
    qtybal = models.IntegerField()
    description = models.CharField(max_length=100, blank=True)
    notification = models.IntegerField()
    takenby = models.CharField(max_length=100)


class Harvest(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    qty = models.IntegerField()
    units = models.IntegerField()
    source = models.CharField(max_length=100)
    description = models.CharField(max_length=100, blank=True)
    store = models.CharField(max_length=100)


class AdvanceForm(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    advancedamnt = models.IntegerField()
    description = models.CharField(max_length=100, blank=True)

class Payroll(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    paymod = models.CharField(max_length=50)
    salaryamnt = models.IntegerField()
    paye = models.IntegerField(blank=True)
    nssf1 = models.IntegerField(blank=True)
    tax = models.IntegerField(blank=True)
    lst = models.IntegerField(blank=True)
    advance = models.IntegerField(blank=True)
    netpay = models.IntegerField()
    total = models.IntegerField()


class Requisition(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    costtype = models.CharField(max_length=100)
    units = models.IntegerField()
    activity = models.CharField(max_length=100)
    qty = models.IntegerField()
    unitprice = models.IntegerField()
    subtot = models.IntegerField()
    description = models.CharField(max_length=50, blank=True)
    requestby = models.CharField(max_length=50)
    approvby = models.CharField(max_length=50, blank=True)
    total  = models.IntegerField()


class ToolBinCard(models.Model):
    toolname = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    datein = models.DateField()
    storename = models.CharField(max_length=100)
    dateout = models.DateField()
    takenby = models.CharField(max_length=100)
    toolcond = models.CharField(max_length=100)
    dateofpurch = models.DateField()
    serialno = models.IntegerField(blank=True)

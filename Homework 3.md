# Homework 3
16302010059 张健

标签： 数据库设计

---

## **8.5**
* 证明：伪传递律
* 假设：$\alpha \to \beta 且 \gamma\beta \to \theta$ 成立
* 由增补律，有：$\alpha\gamma \to \beta\gamma$ 成立
* 由传递律，有：$\alpha\gamma \to \theta$ 成立
* 得证, $\alpha \to \beta 且 \gamma\beta \to \theta \Rightarrow \gamma\alpha \to \theta$

## **8.6**
* $函数依赖集F = \{A \to BC, CD \to E, B \to D, E \to A \}$
* $F^+初始值等于F$
* $因为A \to BC \Rightarrow A \to B, A \to C$
* $因为A \to B, B \to D \Rightarrow A \to D$
* $因为A \to C, A \to D, CD \to E \Rightarrow A \to E$
* $综上，A \to ABCDE$
* $因为CD \to E, E \to A \Rightarrow CD \to ABCDE$
* $因为B \to D, CD \to E, E \to A \Rightarrow CB \to A, BC \to ABCDE$
* $因为E \to A \Rightarrow E \to ABCDE$

* 假设X、Y为R的任意子集
* $F^+为：\{AX \to Y, BCX \to Y, CDX \to Y, EX \to Y, X \to X, B \to D, BD \to D, BD \to B, B \to BD\}$
* $R的候选码为：A、BC、CD、E$

## **8.7**
* $F中函数依赖左边无相同属性集，无需合并$
* $没有无关属性，因此F_c = F = \{A \to BC, CD \to E, B \to D, E \to A\}$

## **8.16**
证明：

* $假设\exists A \in R， 且A不是主属性$
* $有A \notin \alpha, A \notin \beta, \beta \to A, \alpha \to \beta成立, 且 \beta \to \alpha不成立$
* $因此, \beta \to A不是平凡的，且\beta不是超码$
* $因此，R满足3NF当前仅当，A - \beta在R的一个候选码中$
* $即A \notin \beta \Rightarrow A - \beta = A，A传递依赖于某一候选码，即A是主属性，矛盾$

## **8.17**
证明：

* $设A为R中的一个非主属性，\alpha 为R的一个候选码$
* $若A部分依赖于\alpha$
* $即\exists\beta \subset \alpha, \beta \to A$
* $因为\beta\subset\alpha, 则\alpha\to\beta成立且\beta\to\alpha不成立$
* $又因为，A是非主属性，则A\notin\alpha,A\notin\beta$
* $因此A传递依赖于\alpha$
* $即满足R第三范式\Rightarrow R满足第二范式$

## **8.29**
### **a.**
* $因为B \to D, D \to A, A \to BCD \Rightarrow B \to A, B \to BCD$
* $因为B \to BCD \Rightarrow B \to C$
* $因为BC \to DE, B \to C, B \to D \Rightarrow B \to DE, B \to E$
* $所以，B^+ = \{B \to ABCDE\}$

### **b.**
证明：

* $由a.知：B^+ = ABCDE$
* $因为A \to BCD \Rightarrow A \to ABCDE$
* $由增补律，AF \to ABCDEF，即AF是超码得证$

### **c.**
* $A \to BCD，D是无关的，因为A \to BC, B \to D \Rightarrow A \to BCD$
* $BC \to DE，D是无关的，因为BC \to E, B \to D \Rightarrow BC \to DE$
* $BC \to E，C是无关的，因为B \to E, B \to D, D \to A, A \to BC \Rightarrow BC \to E$
* 合并
* $F^+ = \{A \to BC, B \to DE, D \to A\}$

### **d.**
$3NF分解：$

* $r_1(A, B, C)$
* $r_2(B, D, E)$
* $r_3(D, A)$
* $r_4(A, F)$

### **e.**
$BCNF分解：$

* $F = \{A \to BCD, BC \to DE, B \to D, D \to A\}$
* $因为非平凡函数依赖A \to BCD违反BCNF$
* $分解为：A \cup BCD、R - (BCD - A) = AEF$
* $即R_1(A, B, C, D)、R_2(A, E, F)$

## **8.31**
因为BCNF分解不总能保证函数依赖

---



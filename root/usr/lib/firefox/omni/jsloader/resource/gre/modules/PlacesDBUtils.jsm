J�s�      #   �   3   �                             resource://gre/modules/PlacesDBUtils.jsm     ��        �    �   �   �   �   �      ;   5       Q;   5      Q;   5      Q;   5      Q;   �   	
�=   
�: Q;   �   	
�=   �: Q;   �   	
�=   �: QAZ  =   `   \6   Q=      Q�     Q;   �   
�A�=   �    �: QAY   �   ]   B]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   ]   �   	]   �   
]   �   ]    �   ]   !�   ]   "�   ]   #�   ]   $�   ]   %\6   Q;   &Y   Z   \]   (Z   \]   )@]   *@]   +>]   ,�   ]   -�   ]   .�   ]   /�   a   0�   ]   1�   a   2\6   'Q�����������ʘ��	��Ј�Ј�Ј�Ј�׈3�׈1�׈4�Ո,�ˈ �ʈ�ߘ��#�,ʘK�ʘYʘpʘ� �ʘ� �ʘ� �ʘ� �ʘ� �ʘ� �ʘ�ʘ��ʘ��ʘ��ʘ�Aʘ�ј������-���ʐʐʐ����<ʘ�Fʘ�Kʘ�Sʘ�[ʘ�cѐ�    C c 
   C o m p o n e n t s    c l a s s e s    C i 
   i n t e r f a c e s    C r    r e s u l t s    C u    u t i l s    i m p o r t %   r e s o u r c e : / / g r e / m o d u l e s / X P C O M U t i l s . j s m #   r e s o u r c e : / / g r e / m o d u l e s / S e r v i c e s . j s m &   r e s o u r c e : / / g r e / m o d u l e s / P l a c e s U t i l s . j s m    E X P O R T E D _ S Y M B O L S    P l a c e s D B U t i l s    F I N I S H E D _ M A I N T E N A N C E _ T O P I C    p l a c e s - m a i n t e n a n c e - f i n i s h e d    B Y T E S _ P E R _ M E B I B Y T E 
   X P C O M U t i l s    d e f i n e L a z y G e t t e r    D B C o n n    _ e x e c u t e T a s k s    _ i s S h u t t i n g D o w n    s h u t d o w n    m a i n t e n a n c e O n I d l e    c h e c k A n d F i x D a t a b a s e 
   _ r e f r e s h U I    _ h a n d l e E r r o r    r e i n d e x    _ c h e c k I n t e g r i t y S k i p R e i n d e x    c h e c k I n t e g r i t y    c h e c k C o h e r e n c e    _ g e t B o u n d C o h e r e n c e S t a t e m e n t s    v a c u u m    e x p i r e    s t a t s 	   t e l e m e t r y    r u n T a s k s    T a s k s 	   p r o t o t y p e    _ l i s t    _ l o g    c a l l b a c k    s c o p e    _ t e l e m e t r y S t a r t    p u s h    p o p    c l e a r    l i s t    l o g    m e s s a g e s     ����    �       '       �                                    �  R       ;    5   �   
�;   5   �: 5   ��N    P l a c e s U t i l s    h i s t o r y    Q u e r y I n t e r f a c e    C i    n s P I P l a c e s D a t a b a s e    D B C o n n e c t i o n     ����      P D B U _ _ e x e c u t e T a s k s �    �      �     =                  .              a T a s k s    t a s k    
  ,     ;    5      )T  �   
�=   �: QT  �   
�:  QT  �   
�:  W  QV     #V  �   
�;    �T  �l Q  T  5      P;   5   	�   

�=   �: �   
�;   �   
�:  T  5   �: QT  >6   QT  5      Y�    T  5   D   Q;   �   
�T  5   �: W QT  5   �   
�V �T  5   �l Q� ;   5   �   
�=   �9   �   �;   �   
�:  X��: �: Q;   5   �   
�@�;   �@�: Q����Ր�Ϙ3Ґ��ޘ7�:����ސ�ʘ@�ʐ됈�F������E    P l a c e s D B U t i l s    _ i s S h u t t i n g D o w n    l o g 4   -   W e   a r e   s h u t t i n g   d o w n .   W i l l   n o t   s c h e d u l e   t h e   t a s k s .    c l e a r    p o p    c a l l    _ t e l e m e t r y S t a r t    S e r v i c e s 	   t e l e m e t r y    g e t H i s t o g r a m B y I d    P L A C E S _ I D L E _ M A I N T E N A N C E _ T I M E _ M S    a d d    D a t e    n o w    c a l l b a c k    s c o p e    C u    g e t G l o b a l F o r O b j e c t    m e s s a g e s    p r e f s 
   s e t I n t P r e f    p l a c e s . d a t a b a s e . l a s t M a i n t e n a n c e    p a r s e I n t    o b s    n o t i f y O b s e r v e r s    F I N I S H E D _ M A I N T E N A N C E _ T O P I C    ����      s c o p e         ����      P D B U _ s h u t d o w n �              �                                    A
  s
  L     ;    C6   Q�̈%    P l a c e s D B U t i l s    _ i s S h u t t i n g D o w n     ����      P D B U _ m a i n t e n a n c e O n I d l e �    u       �  
                                 	   a C a l l b a c k    a S c o p e    t a s k s   �  �  Y     ;    �Z  A5   `   A5   `  A5   `  \�R W  QV  ;   �   
�:  6   QV  T  6   QV  T 6   QA�   	
�V  �: Q�ːʐʐӘ`�ِ�̐�̐�ш    T a s k s    c h e c k I n t e g r i t y    c h e c k C o h e r e n c e 
   _ r e f r e s h U I    _ t e l e m e t r y S t a r t    D a t e    n o w    c a l l b a c k    s c o p e    _ e x e c u t e T a s k s     ����      P D B U _ c h e c k A n d F i x D a t a b a s e �    z       �  
                                 	   a C a l l b a c k    a S c o p e    t a s k s   ~  �  p     ;    �Z  A5   `   A5   `  A5   `  A5   `  A5   `  A5   `  \�R W  QV  T  6   QV  T 6   QA�   	
�V  �: Q�ːʐʐʐʐʐӘz�̐�̐�ш    T a s k s    c h e c k I n t e g r i t y    c h e c k C o h e r e n c e    e x p i r e    v a c u u m    s t a t s 
   _ r e f r e s h U I    c a l l b a c k    s c o p e    _ e x e c u t e T a s k s     ����      P D B U _ _ r e f r e s h U I �    Q       �                       
              a T a s k s    t a s k s  >  4  �     ;    �T  �R W  Q;   5   �   
�Y   �    ]   \�@�: Q;   �   
�V  �: Q�Ґ���א̐��Ո#    T a s k s    P l a c e s U t i l s    h i s t o r y    r u n I n B a t c h M o d e 
   r u n B a t c h e d    P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����    �            �                                      	   a U s e r D a t a  �  �  �      (     ����      P D B U _ _ h a n d l e E r r o r �     6       �      
                                 a E r r o r  a  �  �     ;    �   
�=   T  5   =   T  5   =   �: Q��Ґ�B    C u    r e p o r t E r r o r )   A s y n c   s t a t e m e n t   e x e c u t i o n   r e t u r n e d   w i t h   '    r e s u l t    ' ,   '    m e s s a g e    '     ����      P D B U _ r e i n d e x �    �       �                                     a T a s k s    t a s k s    s t m t  �  �  �   	  ;    �T  �R �   ����Q�   �����   
�=   �: Q;   �   
�=   �: W QV �   
�Y   ;   5   ]   	�    ]   
�   ]   \�: QV �   
�:  Q�ؐ�ې�ڐ�Аϐʐ�И� ��ψ    T a s k s    l o g 	   >   R e i n d e x    D B C o n n    c r e a t e A s y n c S t a t e m e n t    R E I N D E X    e x e c u t e A s y n c    P l a c e s D B U t i l s    _ h a n d l e E r r o r    h a n d l e E r r o r    h a n d l e R e s u l t    h a n d l e C o m p l e t i o n    f i n a l i z e     ����    �              �                                      �  �  �      !     ����    �     o       �                                       a R e a s o n  �  �  �     T  ;    5   5      %�   �����   
�=   �: Q    �   �����   
�=   �: Q;   �   
�   �����: Q�� ��
�����
ې���ۈ#    C i    m o z I S t o r a g e S t a t e m e n t C a l l b a c k    R E A S O N _ F I N I S H E D    l o g !   +   T h e   d a t a b a s e   h a s   b e e n   r e i n d e x e d    -   U n a b l e   t o   r e i n d e x   d a t a b a s e    P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����      P D B U _ _ c h e c k I n t e g r i t y S k i p R e i n d e x �            �                                       a T a s k s  �  
  �     A�    
�T  �C�: �ӈ     c h e c k I n t e g r i t y     ����      P D B U _ c h e c k I n t e g r i t y �    �       �     $                         @      a T a s k s    a S k i p R e i n d e x    t a s k s    s t m t  2  >  �   	  ;    �T  �R �   ����Q�   �����   
�=   �: Q;   �   
�=   �: W QV �   
�Y   ;   5   ]   	B]   
�    ]   �   ]   \�: QV �   
�:  Q�ؐ�ې��ڐ�Аϐ��ʘ� �И� �ψ    T a s k s    l o g    >   I n t e g r i t y   c h e c k    D B C o n n    c r e a t e A s y n c S t a t e m e n t    P R A G M A   i n t e g r i t y _ c h e c k ( 1 )    e x e c u t e A s y n c    P l a c e s D B U t i l s    _ h a n d l e E r r o r    h a n d l e E r r o r    _ c o r r u p t    h a n d l e R e s u l t    h a n d l e C o m p l e t i o n    f i n a l i z e     ����    �    0       �     
                              
   a R e s u l t S e t    r o w  �    �     T  �    
�:  W  QAV  �   
�>�: =   6   Q�Ґ�݈0 
   g e t N e x t R o w    _ c o r r u p t    g e t R e s u l t B y I n d e x    o k     ����    �     P      �      G                   )              a R e a s o n  9    �     T  ;    5   5      �A5      ƈ   �����   
�=   �: Q�   ����   X�   �����   
�=   �: Q;   5   �   	
�=   
�C�: Q�   �����   
�:  Q   E�   �����   
�;   5   �: Q�   �����   
�;   5   �: Q    �   �����   
�=   �: Q   5�   �����   
�=   �: Q�   �����   
�:  Q;   �   
�   �����: Q��� �� ���ې�S��ې�ސ�ڐ��������吐���������
ې�
Ր���ۈ#    C i    m o z I S t o r a g e S t a t e m e n t C a l l b a c k    R E A S O N _ F I N I S H E D    _ c o r r u p t    l o g    -   T h e   d a t a b a s e   i s   c o r r u p t E   -   U n a b l e   t o   f i x   c o r r u p t i o n ,   d a t a b a s e   w i l l   b e   r e p l a c e d   o n   n e x t   s t a r t u p    S e r v i c e s    p r e f s    s e t B o o l P r e f     p l a c e s . d a t a b a s e . r e p l a c e O n S t a r t u p    c l e a r    p u s h    P l a c e s D B U t i l s    _ c h e c k I n t e g r i t y S k i p R e i n d e x    r e i n d e x    +   T h e   d a t a b a s e   i s   s a n e !   -   U n a b l e   t o   c h e c k   d a t a b a s e   s t a t u s    _ e x e c u t e T a s k s     ����      P D B U _ c h e c k C o h e r e n c e �    �       �                                     a T a s k s    t a s k s    s t m t s    �   �     ;    �T  �R �   ����Q�   �����   
�=   �: Q;   �   
�:  W Q;   �   
�V �V �   �Y   ;   5   ]   	�    ]   
�   ]   \�: QV �   
�   �: Q�ؐ�ې�Ԑ�ߐϐʐ�И��Ո1    T a s k s    l o g    >   C o h e r e n c e   c h e c k    P l a c e s D B U t i l s    _ g e t B o u n d C o h e r e n c e S t a t e m e n t s    D B C o n n    e x e c u t e A s y n c    l e n g t h    _ h a n d l e E r r o r    h a n d l e E r r o r    h a n d l e R e s u l t    h a n d l e C o m p l e t i o n    f o r E a c h     ����    �              �                                               !     ����    �     �       �   	                                    a R e a s o n  :  v       T  ;    5   5      %�   �����   
�=   �: Q   5�   �����   
�=   �: Q�   �����   
�:  Q;   �   
�   �����: Q�� ��
�����
ې�
Ր���ۈ#    C i    m o z I S t o r a g e S t a t e m e n t C a l l b a c k    R E A S O N _ F I N I S H E D    l o g    +   T h e   d a t a b a s e   i s   c o h e r e n t $   -   U n a b l e   t o   c h e c k   d a t a b a s e   c o h e r e n c e    c l e a r    P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����    �            �                                       a S t m t  �   �       T  �    
�:  #ψ    f i n a l i z e     ����   !   P D B U _ _ g e t B o u n d C o h e r e n c e S t a t e m e n t s �      
      �  E   `                 -             c l e a n u p S t a t e m e n t s    d e l e t e O b s o l e t e A n n o s    d e l e t e O b s o l e t e I t e m s A n n o s    d e l e t e U n u s e d A n n o A t t r i b u t e s    d e l e t e I n v a l i d A t t r i b u t e A n n o s    d e l e t e O r p h a n A n n o s    s e l e c t P l a c e s R o o t    u p d a t e R o o t T i t l e S q l    f i x P l a c e s R o o t T i t l e    f i x B o o k m a r k s M e n u T i t l e    f i x B o o k m a r k s T o o l b a r T i t l e    f i x U n s o r t e d B o o k m a r k s T i t l e    f i x T a g s R o o t T i t l e    d e l e t e N o P l a c e I t e m s    d e l e t e B o g u s T a g C h i l d r e n    d e l e t e E m p t y T a g s    f i x O r p h a n I t e m s    f i x I n v a l i d K e y w o r d s    f i x B o o k m a r k s A s F o l d e r s    f i x F o l d e r s A s B o o k m a r k s    f i x I n v a l i d P a r e n t s    f i x E m p t y N a m e d T a g s    d e l e t e O r p h a n I c o n s    d e l e t e O r p h a n V i s i t s    d e l e t e O r p h a n I n p u t H i s t o r y     d e l e t e I n v a l i d A t t r i b u t e I t e m s A n n o s    d e l e t e O r p h a n I t e m s A n n o s    d e l e t e U n u s e d K e y w o r d s    f i x I n v a l i d F a v i c o n I d s    f i x V i s i t S t a t s    f i x R e d i r e c t s H i d d e n !  �i    &  Z   \W  Q;    �   
�=   �: W QV  �   
�V �: Q;    �   
�=   �: W QV  �   
�V �: Q;    �   
�=   �: W QV  �   
�V �: Q;    �   
�=   �: W QV  �   
�V �: Q;    �   
�=   �: W QV  �   
�V �: Q;    �   
�=   	�: W QV 5   
;   5   6   QV �   
�:      ��    ;    �   
�=   �: W QV 5   
;   5   6   QV 5   
=   6   QV  �   
�V �: Q;    �   
�=   �: W  QV  5   
;   5   6   QV  �   
�V  �: Q� V �   
�:  Q=   W Q;    �   
�V �: W QV 5   
;   5   6   QV 5   
=   6   QV  �   
�V �: Q;    �   
�V �: W 	QV 	5   
;   5   6   QV 	5   
;   �   
�=   �: 6   QV  �   
�V 	�: Q;    �   
�V �: W 
QV 
5   
;   5   6   QV 
5   
;   �   
�=   �: 6   QV  �   
�V 
�: Q;    �   
�V �: W QV 5   
;   5   6   QV 5   
;   �   
�=   �: 6   QV  �   
�V �: Q;    �   
�V �: W QV 5   
;   5   6   QV 5   
;   �   
�=   �: 6   QV  �   
�V �: Q;    �   
�=   �: W QV 5   
;   5   !5   "6    QV  �   
�V �: Q;    �   
�=   #�: W QV 5   
;   5   6   $QV 5   
;   5   !5   "6    QV  �   
�V �: Q;    �   
�=   %�: W QV 5   
;   5   6   $QV  �   
�V �: Q;    �   
�=   &�: W QV 5   
;   5   6   'QV  �   
�V �: Q;    �   
�=   (�: W QV  �   
�V �: Q;    �   
�=   )�: W QV 5   
;   5   !5   "6    QV 5   
;   5   !5   +6   *QV 5   
;   5   !5   -6   ,QV  �   
�V �: Q;    �   
�=   .�: W QV 5   
;   5   !5   "6    QV 5   
;   5   !5   +6   *QV  �   
�V �: Q;    �   
�=   /�: W QV 5   
;   5   6   'QV 5   
;   5   !5   "6    QV 5   
;   5   !5   -6   ,QV  �   
�V �: QV  �   
�;    �   
�=   0�: �: QV  �   
�;    �   
�=   1�: �: QV  �   
�;    �   
�=   2�: �: QV  �   
�;    �   
�=   3�: �: QV  �   
�;    �   
�=   4�: �: QV  �   
�;    �   
�=   5�: �: QV  �   
�;    �   
�=   6�: �: QV  �   
�;    �   
�=   7�: �: QV  �   
�;    �   
�=   8�: �: Q;    �   
�=   9�: W QV 5   
=   ;6   :QV 5   
;   5   !5   +6   *QV 5   
;   5   6   $QV  �   
�V �: Q;    �   
�=   <�: W QV  �   
�V �: Q;    �   
�=   =�: W QV  �   
�V �: Q;    �   
�=   >�: W QV  �   
�V �: Q;    �   
�=   ?�: W QV  �   
�V �: Q;    �   
�=   @�: W QV  �   
�V �: Q;    �   
�=   A�: W QV  �   
�V �: Q;    �   
�=   B�: W QV  �   
�V �: Q;    �   
�=   C�: W QV  �   
�V �: Q;    �   
�=   D�: W QV  �   
�V �: QV  �ɘ�͐͘�%�Ӑ��͐͘�0�Ӑ��͐͘�;�Ә�?͐͘�F�Ӑ��͐͘�O�Ә�U͐͐�ؐ��ʐ�͐͐���ؐ�Ӑ�Ӑ��͐͐���ؐ�֐��Ϙ�oɐ��ؐ�ؐ�Ӑ�Ӑ�ؐ�ؐ�Ȑܐ�Ӑ�ؐ�ؐ�Ȑܐ�Ӑ�ؐ�ؐ�Ȑܐ�Ӑ�ؐ�ؐ�Ȑܐ�Ә��͐͘���ݐ�Ӑ��͐͘���ؐ�ݐ�Ӑ��͐͘���ؐ�Ӑ��͐͘�Èؐ�Ӑ��͐͘�ЈӘ��͐͘�ވݐ�ݐ�ݐ�Ә��͐͘��ݐ�ݐ�Ә��͐͘���ؐ�ݐ�ݐ�Ә�
�ؐΘ��ؐΘ��ؐΐ���ؐΘ�'�ؐΘ�/�ؐΐ��ؐΐ��ؐΐ��ؐΘ�?͐͘�D�Ӑ�ݐ�ؐ�Ә�K͐͘�Q�Ә�U͐͘�[�Ә�_͐͘�e�Ә�i͐͘�p�Ӑ��͐͘�y�Ә�}͐͘���Ә��͐͘���Ӑ��͐͘���Ӑ��͐͘���Ә����    D B C o n n    c r e a t e A s y n c S t a t e m e n t �   D E L E T E   F R O M   m o z _ a n n o s   W H E R E   a n n o _ a t t r i b u t e _ i d   I N   (       S E L E C T   i d   F R O M   m o z _ a n n o _ a t t r i b u t e s       W H E R E   n a m e   B E T W E E N   ' w e a v e / '   A N D   ' w e a v e 0 '   )    p u s h �   D E L E T E   F R O M   m o z _ i t e m s _ a n n o s   W H E R E   a n n o _ a t t r i b u t e _ i d   I N   (       S E L E C T   i d   F R O M   m o z _ a n n o _ a t t r i b u t e s       W H E R E   n a m e   =   ' s y n c / c h i l d r e n '             O R   n a m e   =   ' p l a c e s I n t e r n a l / G U I D '             O R   n a m e   B E T W E E N   ' w e a v e / '   A N D   ' w e a v e 0 '   ) �   D E L E T E   F R O M   m o z _ a n n o _ a t t r i b u t e s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ a n n o _ a t t r i b u t e s   n   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ a n n o s   W H E R E   a n n o _ a t t r i b u t e _ i d   =   n . i d   L I M I T   1 )   A N D   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ i t e m s _ a n n o s   W H E R E   a n n o _ a t t r i b u t e _ i d   =   n . i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ a n n o s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ a n n o s   a   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ a n n o _ a t t r i b u t e s   W H E R E   i d   =   a . a n n o _ a t t r i b u t e _ i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ a n n o s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ a n n o s   a   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ p l a c e s   W H E R E   i d   =   a . p l a c e _ i d   L I M I T   1 )   )    c r e a t e S t a t e m e n t 4   S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   =   : p l a c e s _ r o o t    p a r a m s    p l a c e s _ r o o t    P l a c e s U t i l s    p l a c e s R o o t I d    e x e c u t e S t e p �   I N S E R T   I N T O   m o z _ b o o k m a r k s   ( i d ,   t y p e ,   f k ,   p a r e n t ,   p o s i t i o n ,   t i t l e ,   g u i d )   V A L U E S   ( : p l a c e s _ r o o t ,   2 ,   N U L L ,   0 ,   0 ,   : t i t l e ,   G E N E R A T E _ G U I D ( ) )    t i t l e     �   U P D A T E   m o z _ b o o k m a r k s   S E T   p a r e n t   =   : p l a c e s _ r o o t   W H E R E   i d   I N   ( S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   W H E R E   f o l d e r _ i d   < >   : p l a c e s _ r o o t )    f i n a l i z e O   U P D A T E   m o z _ b o o k m a r k s   S E T   t i t l e   =   : t i t l e   W H E R E   i d   =   : r o o t _ i d   A N D   t i t l e   < >   : t i t l e    r o o t _ i d    b o o k m a r k s M e n u F o l d e r I d 	   g e t S t r i n g    B o o k m a r k s M e n u F o l d e r T i t l e    t o o l b a r F o l d e r I d    B o o k m a r k s T o o l b a r F o l d e r T i t l e    u n f i l e d B o o k m a r k s F o l d e r I d    U n s o r t e d B o o k m a r k s F o l d e r T i t l e    t a g s F o l d e r I d    T a g s F o l d e r T i t l e �   D E L E T E   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   ( S E L E C T   b . i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   f k   N O T   N U L L   A N D   b . t y p e   =   : b o o k m a r k _ t y p e   A N D   N O T   E X I S T S   ( S E L E C T   u r l   F R O M   m o z _ p l a c e s   W H E R E   i d   =   b . f k   L I M I T   1 )   )    b o o k m a r k _ t y p e 	   b o o k m a r k s    T Y P E _ B O O K M A R K �   D E L E T E   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   ( S E L E C T   b . i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   b . p a r e n t   I N   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   p a r e n t   =   : t a g s _ f o l d e r )   A N D   b . t y p e   < >   : b o o k m a r k _ t y p e   )    t a g s _ f o l d e r   D E L E T E   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   ( S E L E C T   b . i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   b . i d   I N   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   p a r e n t   =   : t a g s _ f o l d e r )   A N D   N O T   E X I S T S   ( S E L E C T   i d   f r o m   m o z _ b o o k m a r k s   W H E R E   p a r e n t   =   b . i d   L I M I T   1 )   ) �   U P D A T E   m o z _ b o o k m a r k s   S E T   p a r e n t   =   : u n s o r t e d _ f o l d e r   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   ( S E L E C T   b . i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   b . p a r e n t   < >   0   A N D   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   =   b . p a r e n t   L I M I T   1 )   )    u n s o r t e d _ f o l d e r �   U P D A T E   m o z _ b o o k m a r k s   S E T   k e y w o r d _ i d   =   N U L L   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   (   S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   k e y w o r d _ i d   N O T   N U L L   A N D   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ k e y w o r d s   W H E R E   i d   =   b . k e y w o r d _ i d   L I M I T   1 )   ) �   U P D A T E   m o z _ b o o k m a r k s   S E T   t y p e   =   : b o o k m a r k _ t y p e   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   (   S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   t y p e   I N   ( : f o l d e r _ t y p e ,   : s e p a r a t o r _ t y p e )   A N D   f k   N O T N U L L   )    f o l d e r _ t y p e    T Y P E _ F O L D E R    s e p a r a t o r _ t y p e    T Y P E _ S E P A R A T O R �   U P D A T E   m o z _ b o o k m a r k s   S E T   t y p e   =   : f o l d e r _ t y p e   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   (   S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   t y p e   =   : b o o k m a r k _ t y p e   A N D   f k   I S   N U L L   )   U P D A T E   m o z _ b o o k m a r k s   S E T   p a r e n t   =   : u n s o r t e d _ f o l d e r   W H E R E   i d   N O T   I N   (   S E L E C T   f o l d e r _ i d   F R O M   m o z _ b o o k m a r k s _ r o o t s   )   A N D   i d   I N   (   S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   b   W H E R E   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   =   b . p a r e n t   A N D   t y p e   I N   ( : b o o k m a r k _ t y p e ,   : s e p a r a t o r _ t y p e )   L I M I T   1 )   ) u   C R E A T E   T E M P   T A B L E   I F   N O T   E X I S T S   m o z _ b m _ r e i n d e x _ t e m p   (       i d   I N T E G E R   P R I M A R Y _ K E Y   ,   p a r e n t   I N T E G E R   ,   p o s i t i o n   I N T E G E R   )     I N S E R T   I N T O   m o z _ b m _ r e i n d e x _ t e m p   S E L E C T   i d ,   p a r e n t ,   0   F R O M   m o z _ b o o k m a r k s   b   W H E R E   p a r e n t   I N   (   S E L E C T   p a r e n t   F R O M   m o z _ b o o k m a r k s   G R O U P   B Y   p a r e n t   H A V I N G   ( S U M ( D I S T I N C T   p o s i t i o n   +   1 )   -   ( c o u n t ( * )   *   ( c o u n t ( * )   +   1 )   /   2 ) )   < >   0   )   O R D E R   B Y   p a r e n t   A S C ,   p o s i t i o n   A S C ,   R O W I D   A S C   S   C R E A T E   I N D E X   I F   N O T   E X I S T S   m o z _ b m _ r e i n d e x _ t e m p _ i n d e x   O N   m o z _ b m _ r e i n d e x _ t e m p ( p a r e n t ) �   U P D A T E   m o z _ b m _ r e i n d e x _ t e m p   S E T   p o s i t i o n   =   (   R O W I D   -   ( S E L E C T   M I N ( t . R O W I D )   F R O M   m o z _ b m _ r e i n d e x _ t e m p   t   W H E R E   t . p a r e n t   =   m o z _ b m _ r e i n d e x _ t e m p . p a r e n t )   )   �   C R E A T E   T E M P   T R I G G E R   I F   N O T   E X I S T S   m o z _ b m _ r e i n d e x _ t e m p _ t r i g g e r   B E F O R E   D E L E T E   O N   m o z _ b m _ r e i n d e x _ t e m p   F O R   E A C H   R O W   B E G I N   U P D A T E   m o z _ b o o k m a r k s   S E T   p o s i t i o n   =   O L D . p o s i t i o n   W H E R E   i d   =   O L D . i d ;   E N D       D E L E T E   F R O M   m o z _ b m _ r e i n d e x _ t e m p   %   D R O P   I N D E X   m o z _ b m _ r e i n d e x _ t e m p _ i n d e x   )   D R O P   T R I G G E R   m o z _ b m _ r e i n d e x _ t e m p _ t r i g g e r      D R O P   T A B L E   m o z _ b m _ r e i n d e x _ t e m p   w   U P D A T E   m o z _ b o o k m a r k s   S E T   t i t l e   =   : e m p t y _ t i t l e   W H E R E   l e n g t h ( t i t l e )   =   0   A N D   t y p e   =   : f o l d e r _ t y p e   A N D   p a r e n t   =   : t a g s _ f o l d e r    e m p t y _ t i t l e 	   ( n o t i t l e ) �   D E L E T E   F R O M   m o z _ f a v i c o n s   W H E R E   i d   I N   ( S E L E C T   i d   F R O M   m o z _ f a v i c o n s   f   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ p l a c e s   W H E R E   f a v i c o n _ i d   =   f . i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ h i s t o r y v i s i t s   W H E R E   i d   I N   ( S E L E C T   i d   F R O M   m o z _ h i s t o r y v i s i t s   v   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ p l a c e s   W H E R E   i d   =   v . p l a c e _ i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ i n p u t h i s t o r y   W H E R E   p l a c e _ i d   I N   ( S E L E C T   p l a c e _ i d   F R O M   m o z _ i n p u t h i s t o r y   i   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ p l a c e s   W H E R E   i d   =   i . p l a c e _ i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ i t e m s _ a n n o s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ i t e m s _ a n n o s   t   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ a n n o _ a t t r i b u t e s   W H E R E   i d   =   t . a n n o _ a t t r i b u t e _ i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ i t e m s _ a n n o s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ i t e m s _ a n n o s   t   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   i d   =   t . i t e m _ i d   L I M I T   1 )   ) �   D E L E T E   F R O M   m o z _ k e y w o r d s   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ k e y w o r d s   k   W H E R E   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ b o o k m a r k s   W H E R E   k e y w o r d _ i d   =   k . i d   L I M I T   1 )   ) �   U P D A T E   m o z _ p l a c e s   S E T   f a v i c o n _ i d   =   N U L L   W H E R E   i d   I N   (   S E L E C T   i d   F R O M   m o z _ p l a c e s   h   W H E R E   f a v i c o n _ i d   N O T   N U L L   A N D   N O T   E X I S T S   ( S E L E C T   i d   F R O M   m o z _ f a v i c o n s   W H E R E   i d   =   h . f a v i c o n _ i d   L I M I T   1 )   ) �  U P D A T E   m o z _ p l a c e s   S E T   v i s i t _ c o u n t   =   ( S E L E C T   c o u n t ( * )   F R O M   m o z _ h i s t o r y v i s i t s   W H E R E   p l a c e _ i d   =   m o z _ p l a c e s . i d   A N D   v i s i t _ t y p e   N O T   I N   ( 0 , 4 , 7 , 8 ) ) ,   l a s t _ v i s i t _ d a t e   =   ( S E L E C T   M A X ( v i s i t _ d a t e )   F R O M   m o z _ h i s t o r y v i s i t s   W H E R E   p l a c e _ i d   =   m o z _ p l a c e s . i d )   W H E R E   i d   I N   (   S E L E C T   h . i d   F R O M   m o z _ p l a c e s   h   W H E R E   v i s i t _ c o u n t   < >   ( S E L E C T   c o u n t ( * )   F R O M   m o z _ h i s t o r y v i s i t s   v   W H E R E   v . p l a c e _ i d   =   h . i d   A N D   v i s i t _ t y p e   N O T   I N   ( 0 , 4 , 7 , 8 ) )   O R   l a s t _ v i s i t _ d a t e   < >   ( S E L E C T   M A X ( v i s i t _ d a t e )   F R O M   m o z _ h i s t o r y v i s i t s   v   W H E R E   v . p l a c e _ i d   =   h . i d )   ) 9  U P D A T E   m o z _ p l a c e s   S E T   h i d d e n   =   1   W H E R E   i d   I N   (   S E L E C T   h . i d   F R O M   m o z _ p l a c e s   h   J O I N   m o z _ h i s t o r y v i s i t s   s r c   O N   s r c . p l a c e _ i d   =   h . i d   J O I N   m o z _ h i s t o r y v i s i t s   d s t   O N   d s t . f r o m _ v i s i t   =   s r c . i d   A N D   d s t . v i s i t _ t y p e   I N   ( 5 , 6 )   L E F T   J O I N   m o z _ b o o k m a r k s   o n   f k   =   h . i d   A N D   f k   I S N U L L   G R O U P   B Y   s r c . p l a c e _ i d   H A V I N G   c o u n t ( * )   =   v i s i t _ c o u n t   )    ����      c r e a t e P l a c e s R o o t        f i x P l a c e s R o o t C h i l d r e n         ����      P D B U _ v a c u u m �          �     ,                                a T a s k s    t a s k s    D B F i l e    s t m t  j  Gn  �    ;    �T  �R �   ����Q�   �����   
�=   �: Q;   5   �   
�=   �;   5   �: W QV �   	
�=   
�: Q�   �����   
�=   9   �   �V 5   X �: =   �: Q;   �   
�=   �: W QV �   
�Y   ;   5   ]   �    ]   �   ]   \�: QV �   
�:  Q�ؐ�ې�ꐈՐ�֐琐ڐ�Аϐʐ�И�؈ψ    T a s k s    l o g    >   V a c u u m    S e r v i c e s    d i r s v c    g e t    P r o f D    C i    n s I L o c a l F i l e    a p p e n d    p l a c e s . s q l i t e    I n i t i a l   d a t a b a s e   s i z e   i s      p a r s e I n t    f i l e S i z e      K i B    D B C o n n    c r e a t e A s y n c S t a t e m e n t    V A C U U M    e x e c u t e A s y n c    P l a c e s D B U t i l s    _ h a n d l e E r r o r    h a n d l e E r r o r    h a n d l e R e s u l t    h a n d l e C o m p l e t i o n    f i n a l i z e     ����    �              �                                      �k  �k  �     !     ����    �           �      +                                a R e a s o n  �k  &n  �  
  T  ;    5   5      ��    �       �   
�=   �: Q;   5   �   
�=   �;    5   	�: W  QV  �   

�=   �: Q�       �   
�=   9   �   �V  5   X �: =   �: Q�    5�   �����   
�=   �: Q�   �����   
�:  Q;   �   
�   �����: Q��� �ʐ�
ېꐈ
Ր�
֐��
ې�
Ր���ۈ#    C i    m o z I S t o r a g e S t a t e m e n t C a l l b a c k    R E A S O N _ F I N I S H E D    l o g     +   T h e   d a t a b a s e   h a s   b e e n   v a c u u m e d    S e r v i c e s    d i r s v c    g e t    P r o f D    n s I L o c a l F i l e    a p p e n d    p l a c e s . s q l i t e    F i n a l   d a t a b a s e   s i z e   i s      p a r s e I n t    f i l e S i z e      K i B    -   U n a b l e   t o   v a c u u m   d a t a b a s e    c l e a r    P l a c e s D B U t i l s    _ e x e c u t e T a s k s    ����      v a c u u m e d D B F i l e         ����      P D B U _ e x p i r e �    �       �                                     a T a s k s    t a s k s 
   e x p i r a t i o n  �n  *q  �  	  ;    �T  �R �   ����Q�   �����   
�=   �: Q;   5   �   
�;   5   �: W Q;   5   	�   

�    �;   5   �B�: QV �   
�@�=   �>�: Q�ؐ�ې�ҐҐ��ؘ��ѐ���و=    T a s k s    l o g    >   O r p h a n s   e x p i r a t i o n    C c     @ m o z i l l a . o r g / p l a c e s / e x p i r a t i o n ; 1 
   g e t S e r v i c e    C i    n s I O b s e r v e r    S e r v i c e s    o b s    a d d O b s e r v e r    P l a c e s U t i l s    T O P I C _ E X P I R A T I O N _ F I N I S H E D    o b s e r v e    p l a c e s - d e b u g - s t a r t - e x p i r a t i o n     ����    �    _      �                               �      a S u b j e c t    a T o p i c    a D a t a 	   a r g u m e n t s    �o  �p  �    	W  Q;    5   �   
�V  5   �T �: Q�   �����   
�=   �: Q;   �   
�   �����: Q�㐈ې�ۈ#    S e r v i c e s    o b s    r e m o v e O b s e r v e r    c a l l e e    l o g    +   D a t a b a s e   c l e a n e d   u p    P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����   
   P D B U _ s t a t s �    1      �  /   �                 K              a T a s k s    t a s k s    D B F i l e    s t m t  �q  +x  �    ;    �T  �R �   ����Q�   �����   
�=   �: Q;   5   �   
�=   �;   5   �: W QV �   	
�=   
�: Q�   �����   
�=   9   �   �V 5   X �: =   �: QZ  =   `   =   `  =   `  =   `  =   `  \�   
�    �: Q��   ;   5   �   
�=   �: W Q�      �   
�=   V =   �: Q�    �   vW Q�     ;   �   
�=   �: W QV 5   =   6   Q   �m�   V �    
�>�: W Q;   �   
�=   !V �: W QV �   "
�:  Q�      �   
�=   #V =   $V �   %
�>�: =   &�: QV �   '
�:  Q� �V �   "
�:  ���[V �   (
�:  QV 5   =   )6   Q   2m�   �����   
�=   *V �    
�>�: �: Q�V �   "
�:  ����V �   (
�:  QV 5   =   +6   Q   2m�   �����   
�=   ,V �    
�>�: �: Q�V �   "
�:  ����V �   '
�:  Q;   -�   .
�   �����: Q�ؐ�ې�ꐈՐ�����͐ɐɐɐҐʘ��Ґ͐��x�ʀ{��͐͐�Ӑ(� ���Ԑ͐ѐ�ϐ����Ҙ��՘� �ϐ��Ӑ(B����#��였#�Ր���ϐ��Ӑ(B����)��였)�Ր���ϐ��ۈ#    T a s k s    l o g    >   S t a t i s t i c s    S e r v i c e s    d i r s v c    g e t    P r o f D    C i    n s I L o c a l F i l e    a p p e n d    p l a c e s . s q l i t e    D a t a b a s e   s i z e   i s      p a r s e I n t    f i l e S i z e      K i B    u s e r _ v e r s i o n 	   p a g e _ s i z e 
   c a c h e _ s i z e    j o u r n a l _ m o d e    s y n c h r o n o u s    f o r E a c h    p r e f s 
   g e t I n t P r e f 5   p l a c e s . h i s t o r y . e x p i r a t i o n . t r a n s i e n t _ c u r r e n t _ m a x _ p a g e s    H i s t o r y   c a n   s t o r e   a   m a x i m u m   o f        u n i q u e   p a g e s    D B C o n n    c r e a t e S t a t e m e n t 1   S E L E C T   n a m e   F R O M   s q l i t e _ m a s t e r   W H E R E   t y p e   =   : t y p e    p a r a m s    t y p e    t a b l e 	   g e t S t r i n g    S E L E C T   c o u n t ( * )   F R O M      e x e c u t e S t e p    T a b l e        h a s      g e t I n t 3 2      r e c o r d s    f i n a l i z e    r e s e t    i n d e x    I n d e x      t r i g g e r    T r i g g e r      P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����    �    m       �                                      a P r a g m a    s t m t  Ls  t    	  ;    �   
�=   T  �: W  QV  �   
�:  Q�   �����   
�T  =   V  �   
�>�: �: QV  �   
�:  Qސ�ϐ��ψ    D B C o n n    c r e a t e S t a t e m e n t    P R A G M A      e x e c u t e S t e p    l o g      i s   	   g e t S t r i n g    f i n a l i z e    ����   	   l i m i t U R I s        ����      e x        ����   	   t a b l e N a m e     	   c o u n t S t m t        �  B      [  B      �  �       �   Q       ����      P D B U _ t e l e m e t r y �   G      �  :   �                 A      @      a T a s k s    a H e a l t h R e p o r t C a l l b a c k    t a s k s    i s T e l e m e t r y    p r o b e V a l u e s    p r o b e s    p a r a m s    o u t s t a n d i n g P r o b e s    r e p o r t R e s u l t  �z  *�  A    �    �   ����Q�   ����H   @�   ����Q;    �T  �R W  Q�   ���� W QY   \�   ����QZ  Y   =   ]   C]   =   ]   \`   Y   =   ]   C]   =   ]   \`  Y   =   ]   =   	]   \`  Y   =   
]   =   ]   \`  Y   =   ]   =   ]   \`  Y   =   ]   =   ]   \`  Y   =   ]   =   ]   \`  Y   =   ]   �   ]   \`  Y   =   ]   �   ]   \`  Y   =   ]   =   ]   \`  	Y   =   ]   =   ]   �   ]   \`  
Y   =   ]   =   ]   \`  Y   =   ]   =   ]   \`  Y   =   ]   =   ]   \`  Y   =   ]   =    ]   \`  \W QY   ;   !5   "]   #;   !5   $5   %]   &;   !5   $5   ']   (;   !5   )]   *\W Q>�   ����Q>�      ~m�   V V 7�      QV  E   Q�      5       �   5�     #?�     QQ=   �      q    &�     �      �: Q�    �;   +�   ,
�      5   �: W 	QV K   XmMn   -�o   -Q�      5   �   .
�=   /;   -�: >   V 	5   0;   -V ;   -78Q�L����N�V 	�   1
�Y   ;   25   3]   4�   ]   5�   ]   6\�: Qt   
   �V 	�   7
�:  Qu � V #?W QQ�V V �   8���y� ;   2�   9
�V  �: Q������Aː�Ґ��Θ�IИ�]�ϐ�ϐ�ϐ�Ϙ�iϐϐ��ϐϘ�rϐϐ�ϐϘ��ϐϘ��ϐϘ��ϐϘ��ϐϐ�ϐʐϘ��ϐϘ��ϐϐ�ϐϐ�ϐԐ���ϐԐԐԐ��ː����&�~�r���,�ѐ��
ʈ��x;����ؐ��
���ِx;����5[Ԑ���
ᘀ���Аϐʘ���x}�����Ԙ�߈'̈���֘��Ո#    T a s k s    P L A C E S _ P A G E S _ C O U N T 	   h i s t o g r a m    h e a l t h r e p o r t    S E L E C T   c o u n t ( * )   F R O M   m o z _ p l a c e s    q u e r y    P L A C E S _ B O O K M A R K S _ C O U N T �   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   b   J O I N   m o z _ b o o k m a r k s   t   O N   t . i d   =   b . p a r e n t   A N D   t . p a r e n t   < >   : t a g s _ f o l d e r   W H E R E   b . t y p e   =   : t y p e _ b o o k m a r k      P L A C E S _ T A G S _ C O U N T ?   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   W H E R E   p a r e n t   =   : t a g s _ f o l d e r      P L A C E S _ F O L D E R S _ C O U N T o   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   W H E R E   T Y P E   =   : t y p e _ f o l d e r   A N D   p a r e n t   N O T   I N   ( 0 ,   : p l a c e s _ r o o t ,   : t a g s _ f o l d e r )      P L A C E S _ K E Y W O R D S _ C O U N T "   S E L E C T   c o u n t ( * )   F R O M   m o z _ k e y w o r d s      P L A C E S _ S O R T E D _ B O O K M A R K S _ P E R C K  S E L E C T   R O U N D ( (   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   b   J O I N   m o z _ b o o k m a r k s   t   O N   t . i d   =   b . p a r e n t   A N D   t . p a r e n t   < >   : t a g s _ f o l d e r   A N D   t . p a r e n t   >   : p l a c e s _ r o o t   W H E R E   b . t y p e     =   : t y p e _ b o o k m a r k   )   *   1 0 0   /   (   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   b   J O I N   m o z _ b o o k m a r k s   t   O N   t . i d   =   b . p a r e n t   A N D   t . p a r e n t   < >   : t a g s _ f o l d e r   W H E R E   b . t y p e   =   : t y p e _ b o o k m a r k   ) )      P L A C E S _ T A G G E D _ B O O K M A R K S _ P E R C   S E L E C T   R O U N D ( (   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   b   J O I N   m o z _ b o o k m a r k s   t   O N   t . i d   =   b . p a r e n t   A N D   t . p a r e n t   =   : t a g s _ f o l d e r   )   *   1 0 0   /   (   S E L E C T   c o u n t ( * )   F R O M   m o z _ b o o k m a r k s   b   J O I N   m o z _ b o o k m a r k s   t   O N   t . i d   =   b . p a r e n t   A N D   t . p a r e n t   < >   : t a g s _ f o l d e r   W H E R E   b . t y p e   =   : t y p e _ b o o k m a r k   ) )      P L A C E S _ D A T A B A S E _ F I L E S I Z E _ M B    c a l l b a c k    P L A C E S _ D A T A B A S E _ J O U R N A L S I Z E _ M B    P L A C E S _ D A T A B A S E _ P A G E S I Z E _ B 3   P R A G M A   p a g e _ s i z e   / *   P l a c e s D B U t i l s . j s m   P A G E S I Z E _ B   * /    P L A C E S _ D A T A B A S E _ S I Z E _ P E R _ P A G E _ B    P R A G M A   p a g e _ c o u n t    P L A C E S _ A N N O S _ B O O K M A R K S _ C O U N T $   S E L E C T   c o u n t ( * )   F R O M   m o z _ i t e m s _ a n n o s    P L A C E S _ A N N O S _ B O O K M A R K S _ S I Z E _ K B 5   S E L E C T   S U M ( L E N G T H ( c o n t e n t ) ) / 1 0 2 4   F R O M   m o z _ i t e m s _ a n n o s    P L A C E S _ A N N O S _ P A G E S _ C O U N T    S E L E C T   c o u n t ( * )   F R O M   m o z _ a n n o s    P L A C E S _ A N N O S _ P A G E S _ S I Z E _ K B /   S E L E C T   S U M ( L E N G T H ( c o n t e n t ) ) / 1 0 2 4   F R O M   m o z _ a n n o s    P l a c e s U t i l s    t a g s F o l d e r I d    t a g s _ f o l d e r 	   b o o k m a r k s    T Y P E _ F O L D E R    t y p e _ f o l d e r    T Y P E _ B O O K M A R K    t y p e _ b o o k m a r k    p l a c e s R o o t I d    p l a c e s _ r o o t    D B C o n n    c r e a t e A s y n c S t a t e m e n t    p a r a m    i n d e x O f    :    p a r a m s    e x e c u t e A s y n c    P l a c e s D B U t i l s    _ h a n d l e E r r o r    h a n d l e E r r o r    h a n d l e R e s u l t    h a n d l e C o m p l e t i o n    f i n a l i z e    l e n g t h    _ e x e c u t e T a s k s     ����      r e p o r t R e s u l t     <      �  
   ?                               a P r o b e    a V a l u e    v a l u e   *�  ��  �    �   ����#?�   ����QQT W  Q�=    T  q   T  �    
�V  �: W  Q9   �   �V  �:    I�   ����T  5   V  8Q;   5   �   
�T  5   �: �   
�V  �: Q   2�    vW Q;   5   �   	
�V �: Q�     �   ���� E   Q�   ����   Q��   �����   �����: Q   2�   vW Q;   5   �   	
�V �: Q�     �ؐ������
֐����
֐�
��x��ʐ�ڀ{����
����
�x�ʐ�
ڀ{��	    c a l l b a c k    i s F i n i t e 	   h i s t o g r a m    S e r v i c e s 	   t e l e m e t r y    g e t H i s t o g r a m B y I d    a d d 
   C o m p o n e n t s    u t i l s    r e p o r t E r r o r    ����      e x        ����      e x         �              �       ����    �      ^       �                                      D B F i l e �  ��  �    ;    5   �   
�=   �;   5   �: W  QV  �   
�=   �: Q9   �   �V  5   	;   
�: ꐈ
Ր�
ވ6    S e r v i c e s    d i r s v c    g e t    P r o f D    C i    n s I L o c a l F i l e    a p p e n d    p l a c e s . s q l i t e    p a r s e I n t    f i l e S i z e    B Y T E S _ P E R _ M E B I B Y T E     ����    �      ^       �                                      D B F i l e �  ߊ  �    ;    5   �   
�=   �;   5   �: W  QV  �   
�=   �: Q9   �   �V  5   	;   
�: ꐈ
Ր�
ވ6    S e r v i c e s    d i r s v c    g e t    P r o f D    C i    n s I L o c a l F i l e    a p p e n d    p l a c e s . s q l i t e - w a l    p a r s e I n t    f i l e S i z e    B Y T E S _ P E R _ M E B I B Y T E     ����    �    B       �                                      a D b P a g e C o u n t 
   d b P a g e S i z e    p l a c e s P a g e C o u n t  �  `�  �    �   ����5    W  Q�   ����5   W Q;   �   
�V  T  V �: ��ҐҐ�
݈A    P L A C E S _ D A T A B A S E _ P A G E S I Z E _ B    P L A C E S _ P A G E S _ C O U N T    M a t h    r o u n d    ����      i                p r o b e       s t m t                �    =       �     	                              
   a R e s u l t S e t    r o w  
�  ��  �  	  T  �    
�:  W  Q�  �����   �����V  �   
�>�: �: QҐ��- 
   g e t N e x t R o w    g e t R e s u l t B y I n d e x            �              �                                      ��  ��  �     )   �  �    �  C     Z  [       ����      P D B U _ r u n T a s k s �    4       �                                      a T a s k s 	   a C a l l b a c k    t a s k s   ��  &�      ;    �T  �R W  QV  T 6   Q;   �   
�V  �: QҐ�̐�Ո#    T a s k s    c a l l b a c k    P l a c e s D B U t i l s    _ e x e c u t e T a s k s     ����      T a s k s      �       �      ,                                 a T a s k s  ��  Ǜ      T     �;    �   
�T  �:    *AT  �   
�>�T  �   �: 6   Q   T  '=   E    Q;   ;   rD   Q=   T  q   PAT  5   6   QAT  5   	6   QAT  5   
6   
QAT  5   6   QAT  5   6   Q���%��嘀$�А���ϐ�ϐ�ϐ�ϐ�ψ.    A r r a y    i s A r r a y    _ l i s t    s l i c e    l e n g t h    o b j e c t    T a s k s    l i s t    _ l o g    m e s s a g e s    c a l l b a c k    s c o p e    _ t e l e m e t r y S t a r t     ����      T _ p u s h �            �                                       a N e w E l t  ��  �  <    A5    �   
�T  �: Q��ֈ    _ l i s t    u n s h i f t     ����      T _ p o p �              �                                    i�  ~�  F    A5    �   
�:  ҈    _ l i s t    s h i f t     ����      T _ c l e a r �              �                                    ��  �  K    A5    >6   Q��͈    _ l i s t    l e n g t h     ����    �       !       �                                    G�  p�  S    A5    �   
�>�A5    �   �: ��%    _ l i s t    s l i c e    l e n g t h     ����      T _ l o g �            �                                       a M s g  �  �  [    A5    �   
�T  �: Q��ֈ    _ l o g    p u s h     ����    �       !       �                                    y�  ��  c    A5    �   
�>�A5    �   �: ��#    _ l o g    s l i c e    l e n g t h 